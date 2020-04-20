<template>
  <div id="app">
    <div id="father">
      <card :class="{card:iscard}" title="登录" :bordered="false">
        <ainput :class="{in:true}" placeholder="账号" v-model="id" />
        <ainput :class="{in:true}" placeholder="密码" type="password" v-model="pwd" />
        <br />
        <label style="margin-right:20px">
          <input type="radio" name="type" value="1" v-model="type" />管理员
        </label>
        <label style="margin-right:20px">
          <input type="radio" name="type" value="2" v-model="type" />教师
        </label>
        <label style="margin-right:20px">
          <input type="radio" name="type" value="3" v-model="type" />学生
        </label>
        <br />
        <a-button :class="{btn:isbtn}" @click="login()">登录</a-button>
        <a href="http://localhost:8081/forgetpwd" style="position:absolute;bottom:2px;right:10px">忘记密码</a>
      </card>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入
import { Card } from "ant-design-vue";
import { Input } from "ant-design-vue";

// 局部注册
export default {
  name: "Login",
  components: {
    card: Card,
    ainput: Input
  },
  methods: {
    login() {
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
            if(this.type==1){
              this.$router.push("/admin");
            }
            else if(this.type==2){
              this.$router.push("/teacher");
            }
            else this.$router.push("/student");
          }
          else alert("信息有误")
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
  height:722px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 200px;
  display: flex;
  justify-content: center;
  background-color:#ECECEC
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
  background-image: url('../assets/yizhangdui.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.card {
  width: 618px;
  height: 309px;
  background-color: #ffffff;
  opacity: 0.85;
}
.ant-card-head {
  font-size: 30px !important;
  border: none;
}
</style>