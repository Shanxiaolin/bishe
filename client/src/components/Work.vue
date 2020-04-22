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
        :data="tablearry.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="overflow-y:auto"
      >
        <div>
          <el-table-column label="学号" prop="sid"></el-table-column>
        </div>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div>
      <el-drawer title="我嵌套了 Form !" :visible.sync="dialog" :with-header="false">
        <div class="demo-drawer__content" style="padding-top:60px;padding-right:30px">
          <el-form>
            <el-form-item :label-width="formLabelWidth" style="margin-top:40px">
              <el-input
                v-model="vuetext"
                type="textarea"
                autocomplete="off"
                style="max-height:220px;overflow-y:auto"
              ></el-input>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth" style="margin-top:40px">
              <el-input placeholder="请在此评分" v-model="mark" style="margin-top:40px"></el-input>
            </el-form-item>
            <el-form-item :label-width="formLabelWidth" style="margin-top:40px">
              <el-input placeholder="请在此输入评价" v-model="response" style="margin-top:40px"></el-input>
            </el-form-item>
          </el-form>
          <div class="demo-drawer__footer">
            <el-button @click="cancelForm">取 消</el-button>
            <el-button type="primary" @click="upmark">确 定</el-button>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
// 存放表单数组tablearry
// 存放表单数组里的对象tableobject
// 存放res.data.response
var reqtemp = [];
// 在model中存放的是作业编号
var workid
 
export default {
  name: "Work",
  data() {
    return {
      vuetext:"",
      tablearry: [],
      tableobject: {},
      check: "1",
      id: "",
      dialog: false,
      mark: "",
      type: [],
      formLabelWidth: "80px",
      timer: null,
      search: "",
      response:""
    };
  },
  methods: {
      // row里边存储的是本行所有的值
    handleEdit(index, row) {
      this.dialog = true;
      workid = row.wid
      this.vuetext = row.text
    },
    handleDelete(index, row) {},
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    upmark() {
        var data = {
        id:workid,
        mark:this.mark,
        responses:this.response,
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
          if (res==0) {
              alert("操作成功");
          } else alert("操作失败");
        })
        .catch(err => {
          alert(err);
        });
    },
    searchwork() {
      let _this = this;
      let temp = this.id.split(",");
      let data = {
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
              if (reqtemp[i]["w-mark"] == null) {
                _this.tableobject["sid"] = reqtemp[i]["s-id"];
                _this.tableobject["text"] = reqtemp[i]["w-text"];
                 _this.tableobject["wid"] = reqtemp[i].id;
                _this.tablearry.push(_this.tableobject);
                console.log(_this.tablearry);
              }
            }
            _this.check = 2;
          } else alert("查询不到此信息");
        })
        .catch(err => {
          alert(err);
        });
    },
    
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