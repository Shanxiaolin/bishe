<template>
  <el-card class="box-card" style="width:618px;height:309px;margin-top:100px;line-height: 30px;">
    <div slot="header" style="height:34.4px; padding:0px">
      <p style="font-size:20px;font-weight:200;padding:0;line-height:30px">修改密码</p>
    </div>
    <el-input :class="{in:true}" placeholder="账号" v-model="id" clearable></el-input>
    <el-input :class="{in:true}" placeholder="密码" show-password v-model="pwd"></el-input>
    <br/>
    <label style="margin-right:20px">
      <input type="radio" name="type" value="2" v-model="type" />教师
    </label>
    <label style="margin-right:20px">
      <input type="radio" name="type" value="3" v-model="type" />学生
    </label>
    <br/>
    <el-button :class="{btn:isbtn}" @click="login()">确认修改</el-button>
    <a
      href="http://localhost:8081/forgetpwd"
      style="position:absolute;bottom:2px;right:10px;text-decoration:none"
    >忘记密码</a>
  </el-card>
</template>

<script>
// 局部注册
export default {
  name: "UpdatePwd",
  components: {},
  methods: {
    login() {
      // 要用父传子来拿到ID
      var data = { id: this.id, password: this.pwd };
      console.log(typeof data);
      if (this.type == 2) {
        this.$axios({
          url: "http://localhost:3000/teacher/pwd",
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
              this.$router.push("/teacher");
            } else alert("修改失败");
          })
          .catch(err => {
            alert(err);
          });
      } else {
        this.$axios({
          url: "http://localhost:3000/student/pwd",
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
              this.$router.push("/stuedent");
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
      iscard: true,
      id: "",
      pwd: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.in {
  width: 300px;
  margin-top:5px;
}
.btn {
  background-color: #86ce2f !important;
  margin-top:10px;
  width: 300px;
}
.el-card__header {
  padding: 9px 10px;
}
 
</style>
