<template>
  <div id="app">
    <div id="father">
      <el-card class="box-card" :class="{bac:havebac}">
        <div slot="header" class="clearfix">
          <span class="headerfsize">忘记密码修改密码</span>
        </div>
        <el-input :class="{in:true}"  class=" fsize" placeholder="账号" v-model="id" clearable></el-input>
        <el-input :class="{in:true}"  class=" fsize" placeholder="验证码即TOKEN" v-model="token" clearable></el-input>
        <el-input :class="{in:true}"  class=" fsize" placeholder="密码" show-password v-model="pwd"></el-input>
        <br />
        <label class="fsize lmargin">
          <input type="radio" name="type" value="2" v-model="type" />教师
        </label>
        <label class="fsize lmargin">
          <input type="radio" name="type" value="3" v-model="type" />学生
        </label>
        <br />
        <el-button :class="{btn:isbtn}" class="allheight fsize" @click="login()">确认修改</el-button>
      </el-card>
    </div>
    <router-view />
  </div>
</template>
<script>
// 局部注册
export default {
  name: "ForgetPwd",
  components: {},
  methods: {
    login() {
      var data = { id: this.id, password: this.pwd, token: this.token };
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
              this.$router.push("/");
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
      havebac:true,
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
  width: 70%;
}
.btn {
  margin-top: 5px;
  background-color: #86ce2f;
  width: 70%;
}
#father {
  width: 40%;
  height: 60%;
  background-image: url("../assets/yizhangdui.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  border:none;
}
.bac {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  opacity: 0.85;
  position: relative;
}
.lmargin {
  margin-right: 10px;
}
.headerfsize {
  font-size: 22px;
  font-weight: 400;
}

  .el-card__header {
  border:none;
  padding:10px 18px
}
.el-card{
  border:none;
}
 .el-input__inner {
   line-height:40px;
   height:40px;
 }  
 
@media screen and (max-width: 768px) {
  #father {
    width: 80%;
  }
  .lmargin {
    margin-right: 10px;
  }
  .fsize {
    font-size: 12px;
  }
  .headerfsize {
    font-size: 18px;
    font-weight:200;
  }
 .el-input__inner {
   line-height:32px;
   height:36px;
 }  
 
}
 
</style>
