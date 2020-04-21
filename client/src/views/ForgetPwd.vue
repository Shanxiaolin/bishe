<template>
  <div id="app">
    <div id="father">
      <el-card class="box-card" :class="{bac:havebac}">
        <div slot="header" class="clearfix">
          <span style="font-size:26px;font-weight:400">忘记密码修改密码</span>
        </div>
        <el-input :class="{in:true}" placeholder="账号" v-model="id" clearable></el-input>
        <el-input :class="{in:true}" placeholder="验证码" v-model="token" clearable></el-input>
        <el-input :class="{in:true}" placeholder="密码" show-password v-model="pwd"></el-input>
        <br />
        <label style="margin-right:20px">
          <input type="radio" name="type" value="2" v-model="type" />教师
        </label>
        <label style="margin-right:20px">
          <input type="radio" name="type" value="3" v-model="type" />学生
        </label>
        <br />
        <el-button :class="{btn:isbtn}" @click="login()">确认修改</el-button>
      </el-card>
    </div>
    <router-view/> 
  </div>
</template>
<script>
 

// 局部注册
export default {
  name: "ForgetPwd",
  components: {
  },
  methods: {
    login() {
      var data = { id: this.id, password: this.pwd, token: this.token };
      console.log(typeof data);
      if (this.type == 2) {
        this.$axios({
          url: "http://localhost:3000/teacher/forgetpwd",
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
          url: "http://localhost:3000/student/forgetpwd",
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
              this.$router.push('/')
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
      pwd: "",
      type: "",
      token: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  height: 506px;
  text-align: center;
  color: #2c3e50;
  padding-top: 200px;
  display: flex;
  justify-content: center;
  background-color: #ececec;
}
.in {
  margin-bottom: 5px;
  width: 300px;
}
.btn {
  margin-top: 5px;
  background-color: #86ce2f !important;
  width: 300px;
}
#father {
  width: 618px;
  height: 309px;
  background-image: url("../assets/yizhangdui.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.bac {
  width: 616.5px;
  height: 307.5px;
  background-color: #ffffff;
  opacity: 0.85;
  position: relative;
}
</style>
