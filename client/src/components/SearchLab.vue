<template>
  <el-card class="box-card card">
    <div slot="header" class="clearfix">
      <div style="margin-top: 15px;">
        <el-input placeholder="例如:软件工程,2016,4,C语言实训" v-model="id" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </div>
    </div>
  <div :key='check'>
    <div v-for="o in resmessage" :key="o" class="text item">{{o}}</div>
</div>
  </el-card>
</template>

<script>
var reqtemp = [];
var str;
var tempmessage = {};
export default {
  name: "SearchLab",
  data() {
    return {
      id: "",
      resmessage: {},
      check:"1"
    };
  },
  methods: {
    search() {
      var _this = this;
      var temp = this.id.split(",");
      var data = {
        subject: temp[0],
        grade: temp[1],
        classes: temp[2],
        course: temp[3]
      };

      this.$axios({
        url: "http://localhost:3000/lab/scgc",
        method: "post",
        data: data,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          if (res != 1) {
            //得先遍历一下res否则会报length不是属性错误
             let a = res;    
            let b = res.data;       
            let reqtemp = res.data.response;
            let len = res.data.response.length;
            for (let i = 0; i < len; i++) {
              str =
                "实验室:" + reqtemp[i]["l-id"] + "时间:" + reqtemp[i]["l-time"];
              _this.resmessage[i] = str
            
            }
            _this.check=2
          } else alert("查询不到此信息");
        })
        .catch(err => {
          alert(err);
        });
    }
  },
  watch:{
      check(){
         this.check = 1
      }
  }
};
</script>

<style>
.text {
  font-size: 1rem;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.el-main {
  line-height: 80px !important;
}
.card {
  height: 70%;
  line-height: 40px;
  margin: 0 auto;
  margin-top: 10%;
}
</style>
