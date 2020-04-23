 <template>
  <div>
    <el-card class="box-card" style="line-height: 30px;overflow-y:auto;width:700px">
      <div slot="header" class="clearfix" style="height:70px; padding:0px">
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入实验室门牌号,例如:202" v-model="id" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="searchwork"></el-button>
          </el-input>
        </div>
      </div>

      <el-table
        :data="tablearry.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="overflow-y:auto"
      >
        <div>
          <el-table-column label="已预约时间" prop="ltime"></el-table-column>
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
  name: "Work",
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
      response: ""
    };
  },
  methods: {
    searchwork() {
      var _this=this
      this.$axios.get("http://localhost:3000/lab/id?id="+this.id)
        .then(res => {
          if (res != 1) {
            //得先遍历一下res否则会报length不是属性错误
            let a = res;
            let b = res.data;
            reqtemp = res.data.response;
            for (let i = 0; i < reqtemp.length; i++) {
                _this.tableobject["lid"] = reqtemp[i]["l-id"];
                var temptime = reqtemp[i]["l-time"];
                var localtime = new Date(temptime)
                // 不转化为字符串的话，识别出来时undefined
                _this.tableobject["ltime"] = localtime+"";
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