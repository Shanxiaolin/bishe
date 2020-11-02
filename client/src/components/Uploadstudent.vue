 <template>
  <el-card class="box-card card">
    <el-upload
      class="upload-demo"
      action
      :on-exceed="exceedFile"
      :on-change="handleChange"
      :show-file-list="true"
      :on-remove="handleRemove"
      :file-list="fileList"
      :limit="limitNum"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      :auto-upload="false"
    >
      <el-button size="small" type="primary">选择学生文件</el-button>
      <div slot="tip" class="el-upload__tip">注：只 能 上 传 xlsx / xls 文 件</div>
    </el-upload>
    <el-button size="small" type="primary" @click="importfxx">上传</el-button>
  </el-card>
</template>

<script>
var elsxname = [];
var elsxid = [];
var elsxtoken = [];
var elsxsubject = [];
var elsxclass = [];
var elsxgrade = [];
export default {
  data() {
    return {
      
      limitNum: 1, // 上传excell时，同时允许上传的最大数
      fileList: [] // excel文件列表
    };
  },
  methods: {
    // 限制个数
     exceedFile(files, fileList) {
        this.$message.warning(`只能选择 ${this.limitNum} 个文件，当前共选择了 ${files.length + fileList.length} 个`);
      },
    // excel表上传
    handleChange(file, fileList) {
      this.fileTemp = file.raw;
      // 判断上传文件格式
      if (this.fileTemp) {
        if (
          this.fileTemp.type ==
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          this.fileTemp.type == "application/vnd.ms-excel"
        ) {
          
        } else {
          this.$message({
            type: "warning",
            message: "附件格式错误，请删除后重新上传！"
          });
        }
      } else {
        this.$message({
          type: "warning",
          message: "请上传附件！"
        });
      }
    },
    // 移除excel表
    handleRemove(file, fileList) {
      this.fileTemp = null;
    },
    importfxx() {
      
      var obj = this.fileTemp
      let _this = this;
      // 通过DOM取文件数据
      this.file = obj;
      var rABS = false; //是否将文件读取为二进制字符串
      var f = this.file;
      var reader = new FileReader();
      FileReader.prototype.readAsBinaryString = function(f) {
        var binary = "";
        var rABS = false; //是否将文件读取为二进制字符串
        var pt = this;
        var wb; //读取完成的数据
        var outdata;
        var reader = new FileReader();
        reader.onload = function(e) {
          var bytes = new Uint8Array(reader.result);
          var length = bytes.byteLength;
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          var XLSX = require("xlsx");
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), {
              //手动转化
              type: "base64"
            });
          } else {
            wb = XLSX.read(binary, {
              type: "binary"
            });
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); //outdata就是读取excel内容之后输出的东西
          this.da = [...outdata];
          
          this.da.map(v => {
            // 这里在全局声明eid会出问题，elsxid都是第二个id,这个就是浅拷贝的问题
            let eid = {};
            let etoken = {};
            let ename = {};
            let esubject = {};
            let eclass = {};
            let egrade = {};
            ename.name = v["NAME"]; //IP是表的标题
            eid.id = v["ID"];
            esubject.subject = v["SUBJECT"]
            etoken.token = v["TOKEN"];
            egrade.grade = v["GRADE"]
            eclass.class = v["CLASS"]
            elsxid.push(eid);
            elsxname.push(ename);
            elsxtoken.push(etoken);
            elsxgrade.push(egrade);
            elsxclass.push(eclass)
            elsxsubject.push(esubject)
          });
            _this.toserver(elsxid, elsxname, elsxtoken,elsxsubject,elsxclass,elsxgrade);
        };
        reader.readAsArrayBuffer(f);
      };
      if (rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
    },
    // 上传内容到后台
    toserver(elsxid, elsxname, elsxtoken,elsxsubject,elsxclass,elsxgrade) {
      var data = {
        id: elsxid,
        name: elsxname,
        token: elsxtoken,
        subject:elsxsubject,
        sclass:elsxclass,
        sgrade:elsxgrade
      };
      this.$axios({
        url: "http://localhost:3000/admin/upstudent",
        method: "post",
        data: data,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          if (res.data == 0) {
            alert("上传成功");
          } else alert("上传失败");
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style scoped>
.card {
  height: 50%;
  line-height: 30px;
  margin: 0 auto;
  margin-top:10%;
}
</style>


