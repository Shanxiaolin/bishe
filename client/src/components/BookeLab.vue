 <template>
  <el-form status-icon label-width="100px" class="demo-ruleForm">
    <el-form-item label="预约人姓名" prop="pass">
      <el-input v-model="name" autocomplete="off" style="width:300px"></el-input>
    </el-form-item>
    <el-form-item label="预约人职工号" prop="pass">
      <el-input v-model="tid" autocomplete="off" style="width:300px"></el-input>
    </el-form-item>
    <el-form-item label="专业">
      <el-select v-model="subject" placeholder="请选择" style="width:300px">
        <el-option
          v-for="item in subjectname"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="入学年份">
      <div class="container">
        <div class="block">
          <el-date-picker
            v-model="grade"
            type="year"
            format="yyyy"
            value-format="yyyy"
            placeholder="选择年"
            style="width:300px"
          ></el-date-picker>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="班级">
      <el-select v-model="classes" placeholder="请选择" style="width:300px">
        <el-option
          v-for="item in classname"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="课程名称">
      <el-select v-model="course" placeholder="请选择" style="width:300px">
        <el-option
          v-for="item in coursename"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="选择时间">
      <el-date-picker v-model="time" type="datetime" placeholder="选择日期时间" style="width:300px"></el-date-picker>
    </el-form-item>
    <el-form-item label="实验室门牌号" prop="pass">
      <el-input v-model="id" autocomplete="off" style="width:300px"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        type: []
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
        }
      ],
      subjectname: [
        {
          value: "智能科学与技术",
          label: "智能科学与技术"
        },
        {
          value: "计算机科学与技术",
          label: "计算机科学与技术"
        },
        {
          value: "软件工程",
          label: "软件工程"
        }
      ],
      coursename: [
        {
          value: "C语言实训",
          label: "C语言实训"
        },
        {
          value: "JAVA实训",
          label: "JAVA实训"
        },
        {
          value: "数据库",
          label: "数据库"
        },
        {
          value: "操作系统",
          label: "操作系统"
        },
        {
          value: ".NET",
          label: ".NET"
        }
      ],
      name: "",
      tid: "",
      subject: "",
      grade: "",
      classes: "",
      course: "",
      time: "",
      id: ""
    };
  },
  methods: {
    submitForm(formName) {
      var stringtime = this.time.toLocaleTimeString();
      var mtime = stringtime.split(":")[1];
      console.log(mtime);
      var stime = stringtime.split(":")[2];
      console.log(stime);
      if (mtime == "30" || mtime == "00" || stime == "00");
      else {
        alert("您选的时间不符合要求，请输入未来日期，时间必须按照课程预约");
        return;
      }
      var data = {
        tid: this.tid,
        name: this.name,
        id: this.id,
        classes: this.classes,
        grade: this.grade,
        time: this.time,
        subject: this.subject,
        course: this.course
      };
      this.$axios({
        url: "http://192.168.0.107:3001/lab/reservation",
        method: "post",
        data: data,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          if (res.data == 0) {
            alert("预约成功");
          } else alert("预约失败");
        })
        .catch(err => {
          alert(err);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>