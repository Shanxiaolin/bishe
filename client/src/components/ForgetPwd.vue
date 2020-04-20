<template>
  <div id="app">
    <div id="father">
      <card :class="{card:iscard}" title="修改密码" :bordered="false">
        <ainput :class="{in:true}" placeholder="账号" v-model="id" />
        <ainput :class="{in:true}" placeholder="token" v-model="token" />
        <ainput :class="{in:true}" placeholder="新密码" type="password" v-model="pwd" />
        <br />
        <label style="margin-right:40px">
          <input type="radio" name="type" value="2" v-model="type" />教师
        </label>
        <label style="margin-right:40px">
          <input type="radio" name="type" value="3" v-model="type" />学生
        </label>
        <br />
        <a-button :class="{btn:isbtn}" @click="login()">确认修改</a-button>
      </card>
    </div>
    <router-view />
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
      var data = { id: this.id, password: this.pwd, token: this.token };
      console.log(typeof(data))
      if (this.type == 2) {
        this.$axios({
          url: "http://localhost:3000/teacher/forgetpwd",
          method: "post",
          data: data,
          headers:{
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
        }
        })
          .then(res => {
            if (res.data == 0) {
              alert("修改成功");
            } else alert("修改失败");
          })
          .catch(err => {
            alert(err);
          }); }
      else {
        this.$axios({
          url: "http://localhost:3000/student/forgetpwd",
          method: "post",
          data: data,
          headers:{
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
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
  height: 722px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
