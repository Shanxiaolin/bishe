<template>
  <el-card class="box-card" style="line-height: 30px;overflow-y:auto">
    <div slot="header" class="clearfix" style="height:70px; padding:0px">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入学号" v-model="id" class="input-with-select">
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
  name: "SearchMark",
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

      this.$axios.get("http://localhost:3000/worktest/id?id="+this.id)
        .then(res => {
          if (res != 1) {
            //得先遍历一下res否则会报length不是属性错误
            let a = res;    
            let b = res.data;       
            let reqtemp = res.data.response;
            let len = res.data.response.length;
            for (let i = 0; i < len; i++) {
              str =
                "作业得分:" + reqtemp[i]["w-mark"]  +"课程:" + reqtemp[i]["s-course"] + "   反馈:" + reqtemp[i]["w-response"];
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

      }
  }
};
</script>

<style>
.text {
  font-size: 14px;
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
</style>
