<template>
  <el-card class="box-card" style="width:500px;height:560px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="学号">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <el-form-item label="入学年份">
        <div class="container">
          <div class="block">
            <el-date-picker v-model="grade"  type=year format="yyyy"
      value-format="yyyy" placeholder="选择年" style="width:380px"></el-date-picker>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="班级">
        <el-select v-model="classes" placeholder="请选择" style="width:380px">
          <el-option
            v-for="item in classname"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <el-select v-model="subject" placeholder="请选择" style="width:380px">
          <el-option
            v-for="item in subjectname"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="课程名称">
        <el-select v-model="course" placeholder="请选择" style="width:380px">
          <el-option
            v-for="item in coursename"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="message"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="width:380px;background-color: #86ce2f">立即创建</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      form: {   
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      classname: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ],
      subjectname:[
        {
          value: "1",
          label: "智能"
        },
        {
          value: "2",
          label: "计算机"
        },
        {
          value: "3",
          label: "软件工程"
        }
      ],
      coursename:[
        {
          value: "1",
          label: "C语言实训"
        },
        {
          value: "2",
          label: "JAVA实训"
        },
        {
          value: "3",
          label: "数据库"
        },
        {
          value: "4",
          label: "操作系统"
        },
        {
          value: "5",
          label: ".NET"
        }
      ],
      classes:'',
      grade:'',
      subject:'',
      course:'',
      id:'',
      message:''
    };
  },
  methods: {
    onSubmit() {
      var  data={
         id:this.id,
         classes:this.classes,
         grade:this.grade,
         text:this.message,
         subject:this.subject,
         course:this.course
       }
       this.$axios({
          url: "http://localhost:3000/worktest/work",
          method: "post",
          data: data,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }
        })
          .then(res => {
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
