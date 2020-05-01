<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item style="display:inline;padding-right:595px;font-size:20px">功能概览</el-menu-item>
        <el-menu-item style="display:inline;   ">{{message}}！欢迎来到大连海事大学实验室平台管理系统</el-menu-item>
      </el-menu>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu
            default-active="/updatepwd"
            router
            mode="horizontal"
            class="el-menu-vertical-demo"
            style="height:612px;"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/teacher/updatepwd" style="width:200px">
              <i class="el-icon-edit"></i>
              <span slot="title">修改密码</span>
            </el-menu-item>
            <el-menu-item index="/teacher/work" style="width:200px">
              <i class="el-icon-chat-line-square"></i>
              <span slot="title">批改作业</span>
            </el-menu-item>
            <el-menu-item index="/teacher/booklab" style="width:200px">
              <i class="el-icon-search"></i>
              <span slot="title">预约实验室</span>
            </el-menu-item>
            <el-menu-item index="/teacher/alllab" style="width:200px">
              <i class="el-icon-message-solid"></i>
              <span slot="title">实验室信息</span>
            </el-menu-item>
             <el-menu-item index="/teacher/searchallmark" style="width:200px">
              <i class="el-icon-search"></i>
              <span slot="title">查询分数</span>
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
  name: "Teacher",
  components: {},
  data() {
    return {
      message: "您好",
    };
  },
  beforeCreate() {
   
  },
  created() {
    
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 40px;
  padding: 0;
  margin-left: 200px;
  margin-right: 200px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 613px;
  margin-left: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 613px;
  width: 500px;
  display: flex;
  justify-content: center;
  margin-right: 200px;
}
/*子代选择器,只要是在body下的.el-container就生效*/
body > .el-container {
  margin-bottom: 40px;
}
</style>
