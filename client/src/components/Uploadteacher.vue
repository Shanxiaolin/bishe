<template>
  <el-card class="box-card" style="line-height: 60px;overflow-y:auto;width:20%;text-align:center">
    <el-upload
      class="upload-demo"
      action
      :on-change="handleChange"
      :show-file-list="false"
      :on-remove="handleRemove"
      :file-list="fileList"
      :limit="limitNum"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      :auto-upload="false"
    >
      <el-button size="small" type="primary">本地上传</el-button>
      <div slot="tip" class="el-upload__tip">注：只 能 上 传 xlsx / xls 文 件</div>
    </el-upload>
  </el-card>
</template>

<script>
var elsxname = [];
var elsxid = [];
var elsxtoken = [];
var check=0
export default {
  data() {
    return {
      
      limitNum: 1, // 上传excell时，同时允许上传的最大数
      fileList: [] // excel文件列表
    };
  },
  methods: {
    changeCheck(){
        check = 1
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
          this.importfxx(this.fileTemp);
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
    importfxx(obj) {
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
            ename.name = v["NAME"]; //IP是表的标题
            eid.id = v["ID"];
            
            etoken.token = v["TOKEN"];
            elsxid.push(eid);
            elsxname.push(ename);
            elsxtoken.push(etoken);
          });
            _this.toserver(elsxid, elsxname, elsxtoken);
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
    toserver(elsxid, elsxname, elsxtoken) {
       
      var data = {
        id: elsxid,
        name: elsxname,
        token: elsxtoken
      };
      this.$axios({
        url: "http://localhost:3000/admin/upteacher",
        method: "post",
        data: data,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          console.log(res)
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
</style>


