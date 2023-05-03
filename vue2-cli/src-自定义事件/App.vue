<template>
  <div id="app">
    <h1>你好啊</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现子组件给父组件传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 以下是两种子组件绑定自定义事件给父组件传递数据 -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现子组件给父组件传递数据 -->
    <Student @getStudentName="getStudentName" />
    <!-- 通过父组件在完成挂载后给子组件绑定一个自定义事件实现子组件给父组件传递数据 -->
    <Teacher ref="teacher"/>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
import Teacher from "./components/Teacher.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
    Teacher,
  },
  data() {
    return {};
  },

  methods: {
    getSchoolName(schoolName) {
      alert("父组件收到SchoolName:" + schoolName);
    },

    getStudentName(studentName) {
      alert("父组件收到StudentName:" + studentName);
    },
    getTeacherName(teacherName) {
      alert("父组件收到TeacherName:" + teacherName);
    },
  },


  mounted(){
    this.$refs.teacher.$on("getTeacherName",this.getTeacherName)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: gray;
  text-align: center;
}
</style>
