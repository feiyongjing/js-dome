<template>
  <div class="student">
    <div>学生名称：{{ name }}</div>
    <div>学生性别：{{ sex }}</div>
    <div>学生年龄：{{ myAge }}</div>
    <button @click="sendStudentName()">把学生名称给Teacher教师组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",

  data() {
    return {
      name: "张三",
      sex: "男",
      myAge: 18,
    };
  },

  methods: {
    sendStudentName() {
      // 触发全局事件总线的事件，第一参数是事件名称，后面的参数是触发事件时携带的参数
      this.$bus.$emit("sendStudentName",this.name)
    },
  },
};
</script>

<style scoped>
.student {
  background-color: blueviolet;
}
</style>