<template>
  <el-card class="box-card card">
    <div slot="header" class="clearfix">
      <span class="span">修改TOKEN</span>
    </div>
    <el-input :class="{in:true}" placeholder="账号" v-model="id" clearable></el-input>
    <el-input :class="{in:true}" placeholder="密码" show-password v-model="pwd"></el-input>
    <br />
    <label class="label-style">
      <input type="radio" name="type" value="1" v-model="type" />管理员
    </label>
    <label class="label-style">
      <input type="radio" name="type" value="2" v-model="type" />教师
    </label>
    <label class="label-style">
      <input type="radio" name="type" value="3" v-model="type" />学生
    </label>
    <br />
    <el-button :class="{btn:isbtn}" @click="login()">修改</el-button>
  </el-card>
</template>

<script>
// 局部注册
export default {
  name: "Token",

  methods: {
    login() {
      var data = { id: this.id, password: this.pwd };
      console.log(typeof data);
      if (this.type == 2) {
        this.$axios({
          url: "http://192.168.0.107:3001/teacher/token",
          method: "post",
          data: data,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            if (res.data == 0) {
              alert("修改成功");
            } else alert("修改失败");
          })
          .catch(err => {
            alert(err);
          });
      } else {
        this.$axios({
          url: "http://192.168.0.107:3001/student/token",
          method: "post",
          data: data,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            if (res.data == 0) {
              alert("修改成功");
            } else alert("修改失败");
          })
          .catch(err => {
            alert(err);
          });
      }
    }
  },
  data() {
    return {
      isbtn: true,
      iscard: false,
      id: "",
      pwd: "",
      type: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.in {
  margin-bottom: 5px;
  width: 80%;
}
.btn {
  margin-top: 5px;
  background-color: #86ce2f !important;
  width: 80%;
}
.span {
  font-weight: 400;
  line-height: 30px;
}
.card {
  height: 50%;
  line-height: 30px;
  margin: 0 auto;
  margin-top:10%;
}
.label-style{
  margin-right:20px;
  vertical-align:center
}
</style>
