<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item  class="left-el-menu-item">功能概览</el-menu-item>
        <el-menu-item class="right-el-menu-item">{{message}}！欢迎来到大连海事大学实验室平台管理系统</el-menu-item>
      </el-menu>
    </el-header>

    <el-container class="my-body">
      <el-aside wclass="el-aside">
        <el-col>
          <el-menu
            default-active="/updatepwd"
            router
            mode="horizontal"
            class="icon-size el-menu-vertical-demo"
            style="height:612px;"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/student/updatepwd" >
              <i class="icon-size el-icon-edit"></i>
              <span slot="title">修改密码</span>
            </el-menu-item>
             <el-menu-item index="/student/token" >
              <i class="icon-size el-icon-edit"></i>
              <span slot="title">修改TOKNE</span>
            </el-menu-item>
            <el-menu-item index="/student/upwork" >
              <i class="icon-size el-icon-s-promotion"></i>
              <span slot="title">提交作业</span>
            </el-menu-item>
            <el-menu-item index="/student/searchmark" >
              <i class="icon-size el-icon-search"></i>
              <span slot="title">查询分数</span>
            </el-menu-item>
            <el-menu-item index="/student/searchlab" >
              <i class="icon-size el-icon-message-solid"></i>
              <span slot="title">实验室信息</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
 

<script>
export default {
  name: "Student",
  components: {},
  data() {
    return {
      message: "您好",
    };
  }, 
  created() {
     this.message=window.sessionStorage.userid
  },
};
</script>

<style>
html{
  font-size:20px
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 40px;
  padding: 0;
  width: 80%;
  margin: 0 auto;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 613px;
  width: 20% !important;
  padding: 0 !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 613px;
  display: flex;
  justify-content: center;
}
/*子代选择器,只要是在body下的.el-container就生效*/
body > .el-container {
  margin-bottom: 40px;
  width: 100%;
  padding: 0;
}
.el-menu-item {
  float: none !important;
}
.el-menu-demo {
  text-align: end;
  overflow: hidden;
}
.left-el-menu-item {
  width: 20%;
  text-align: center;
}
.right-el-menu-item {
  width: 80%;
  position: absolute;
  top: 0;
  right: 0;
}
.el-menu-vertical-demo {
  height: 612px;
  width: 100%;
}
.card {
  width: 60%;
}
.my-body{
  width:80%;
  margin:0 auto
}
/* 手机屏幕的字体大小 */
@media screen and (max-width: 768px) {
  .el-header {
    width: 100%;
  }  
  .my-body{
    width:100%
  }
  .right-el-menu-item {
    width: 75%;
  }
  .left-el-menu-item {
    width: 25%;
  }
  .el-main {
    width: 75%;
    height:575px;
  }
  .el-aside {
    line-height:60px;
    width: 25% !important;
    height:575px;
  }
  .el-menu-vertical-demo {
    height:574px;
  }
  .el-menu-item {
    font-size: 0.5rem;
  }
  .left-el-menu-item {
    font-size: 1rem;
  }
  .right-el-menu-item {
    font-size: 0.5rem;
  }
  .icon-size {
    font-size: 0.6rem;
  }
  .span {
    font-size: 1rem;
  }
  .label-style {
    font-size: 0.5rem;
  }
  .card {
    width: 100%;
  }
  .carda{
    height:90%;
    line-height:20px;
  }
  .btn {
    font-size:0.8rem
  }
}
/* 笔记本电脑的字体大小 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .el-menu-item {
    font-size: 0.5rem;
  }
  .left-el-menu-item {
    font-size: 1rem;
  }
  .right-el-menu-item {
    font-size: 0.5rem;
  }
  .icon-size {
    font-size: 0.6rem;
  }
  .span {
    font-size: 1rem;
  }
  .label-style {
    font-size: 0.5rem;
  }
}
/* 台式电脑显示器屏幕字体大小 */
@media screen and (min-width: 1024px) {
  .el-menu-item {
    font-size: 0.8rem;
  }
  .left-el-menu-item {
    font-size: 1.5rem;
  }
  .right-el-menu-item {
    font-size: 0.8rem;
  }
  .icon-size {
    font-size: 0.9rem;
  }
  .span {
    font-size: 1.5rem;
  }
  .label-style {
    font-size: 0.8rem;
  }
}
</style>
