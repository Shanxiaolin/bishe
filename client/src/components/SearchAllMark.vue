  <template>
  <el-card class="box-card card">
    <div slot="header" class="clearfix">
      <div style="margin-top: 15px;">
        <el-input placeholder="例如:软件工程,2016,4,C语言实训" v-model="id" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchwork"></el-button>
        </el-input>
      </div>
    </div>

    <el-table
      :data="tablearry.filter(data => !search || data.sid.toLowerCase().includes(search.toLowerCase()))"
      style="overflow-y:auto"
    >
      <el-table-column class="label-style" label="学号" prop="sid"></el-table-column>
      <el-table-column class="label-style" label="分数" prop="mark"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
// 存放表单数组tablearry
// 存放表单数组里的对象tableobject
 
 
export default {
  name: "SearchAllMark",
  data() {
    return {
      vuetext: "",
      tablearry: [],
      tableobject: {},
      check: "1",
      id: "",
      mark: "",
      type: [],
      formLabelWidth: "80px",
      timer: null,
      search: "",
      response: "",
      wmark: "",
      sid: ""
    };
  },
  methods: {
    searchwork() {
      var _this = this;
      var temp = this.id.split(",");
      var data = {
        subject: temp[0],
        grade: temp[1],
        classes: temp[2],
        course: temp[3]
      };
      this.$axios({
        url: "http://192.168.0.107:3001/worktest/scgc",
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
            // 写在外面是深拷贝，会出现_this.tablearry的值全部一样
            //    let obj = {};
            for (var i = 0; i < len; i++) {
              let obj = {};
              obj["sid"] = reqtemp[i]["s-id"];
              obj["mark"] = reqtemp[i]["w-mark"];
              obj["wid"] = reqtemp[i].id;
              _this.tablearry.push(obj);
            }
          
            _this.check = 2;
          } else alert("查询不到此信息");
        })
        .catch(err => {
          alert(err);
        });
    }
  },
  watch: {
    tablearry() {}
  }
};
</script>
<style>
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