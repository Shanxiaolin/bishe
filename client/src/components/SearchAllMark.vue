  <template>
  <div>
    <el-card class="box-card" style="line-height: 30px;overflow-y:auto;width:700px">
      <div slot="header" class="clearfix" style="height:70px; padding:0px">
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
        <div>
          <el-table-column label="学号" prop="sid"></el-table-column>
          <el-table-column label="分数" prop="wmark"></el-table-column>
        </div>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
// 存放表单数组tablearry
// 存放表单数组里的对象tableobject
// 存放res.data.response
var reqtemp = [];
// 在model中存放的是作业编号
var workid;

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
      var _this = this;
      var temp = this.id.split(",");
      var data = {
        subject: temp[0],
        grade: temp[1],
        classes: temp[2],
        course: temp[3]
      };
      this.$axios({
        url: "http://localhost:3000/worktest/scgc",
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
            reqtemp = res.data.response;
            for (let i = 0; i < reqtemp.length; i++) {
              _this.tableobject["sid"] = reqtemp[i]["s-id"];
              _this.tableobject["wmark"] = reqtemp[i]["w-mark"];
              _this.tablearry.push(_this.tableobject);
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
</style>