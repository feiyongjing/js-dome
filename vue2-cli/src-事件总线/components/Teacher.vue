<template>
  <div class="teacher">
    <div>教师名称：{{ name }}</div>
    <div>教师性别：{{ sex }}</div>
    <div>教师年龄：{{ myAge }}</div>
    <button @click="sendTeacherName()">把教师名称给School组件</button>
  </div>
</template>

<script>
export default {
  name: "Teacher",

  data() {
    return {
      name: "李四",
      sex: "男",
      myAge: 18,
    };
  },

  methods: {
    sendTeacherName() {
      // 触发全局事件总线的事件，第一参数是事件名称，后面的参数是触发事件时携带的参数
      this.$bus.$emit("sendTeacherName", this.name);
    },

    sendStudentName(studentName) {
      alert("教师组件接收到了学生组件发送的学生名称：" + studentName);
    },
  },
  mounted() {
    // 当前组件绑定事件到全局事件总线，第一参数是事件名称，后面的参数事件的回调函数
    this.$bus.$on("sendStudentName", this.sendStudentName);
  },
  beforeDestroy() {
    // 由于vc的销毁不会自动解绑全局事件中心的自定义事件，所以需要手动解绑，避免vc销毁了但是全局事件总线还残留了与它绑定的自定义事件
    this.$bus.$off("sendStudentName");
  },
};
</script>

<style scoped>
.teacher {
  background-color: rgb(166, 251, 149);
}
</style>