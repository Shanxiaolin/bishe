<template>
  <div id="app">
    <div id="father">
      <el-card class="box-card" :class="{bac:havebac}">
        <div slot="header" class="clearfix">
          <span class="headerfsize">登录</span>
        </div>
        <el-input :class="{in:true}" class="allheight fsize" placeholder="账号" v-model="id" clearable ></el-input>
        <el-input :class="{in:true}" class="allheight fsize" placeholder="密码" show-password v-model="pwd" ></el-input>
        <br />
        <label   class="fsize lmargin ">
          <input type="radio" name="type" value="1" v-model="type" />管理员
        </label>
        <label   class="fsize lmargin">
          <input type="radio" name="type" value="2" v-model="type" />教师
        </label>
        <label   class="fsize lmargin">
          <input type="radio" name="type" value="3" v-model="type" />学生
        </label>
        <br />
        <el-button :class="{btn:isbtn}" class="allheight fsize" @click="login()">登录</el-button>
        <a
          href="http://localhost/forgetpwd" class="fsize"
          style="position:absolute;bottom:2px;right:10px;text-decoration:none"
        >忘记密码</a>
      </el-card>
    </div>
    <router-view />
  </div>
</template>


<script>

 
// 局部注册
export default {
  name: "Login",
  methods: {
    login() {
      window.sessionStorage.userid=this.id
      this.$axios
        .get(
          "http://localhost:3000/login?id=" +
            this.id +
            "&password=" +
            this.pwd +
            "&type=" +
            this.type
        )
        .then(res => {
          if (res.data == 0) {
            if (this.type == 1) {
              var storage = window.sessionStorage;
              storage.setItem("auth", '1');
              this.$router.push("/admin");
            } else if (this.type == 2) {
              var storage = window.sessionStorage;
              storage.setItem("auth", '1');
              this.$router.push("/teacher");
            } else {
              var storage = window.sessionStorage;
              storage.setItem("auth", '1');
              this.$router.push("/student");
            }
          } else alert("信息有误");
        })
        .catch(err => {
          alert(err);
        });
    }
  },
  data() {
    return {
      isbtn: true,
      iscard: true,
      havebac: true,
      id: "",
      pwd: "",
      type: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  height: 506px;
  width:100%;
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
  background-color: #86ce2f ;
  width: 70%;
}
#father {
  width: 40%;
  height: 60%;
  background-image: url("../assets/yizhangdui.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  border:none
}
.bac {
  width: 100% ;
  height: 100%;
  background-color: #ffffff;
  opacity: 0.85;
  position: relative;
}
.lmargin{
  margin-right:10px;
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
     width:80%;
   }
   .lmargin{
     margin-right:10px;
   }
   .fsize{
     font-size:12px;
   }
   .headerfsize {
    font-size: 18px;
    font-weight: 200;
  }
   .el-input__inner {
   line-height:32px;
   height:36px;
 }  
 
 }

</style>