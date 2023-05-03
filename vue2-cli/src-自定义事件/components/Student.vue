<template>
  <div class="student">
    <div>学生名称：{{ name }}</div>
    <div>学生性别：{{ sex }}</div>
    <div>学生年龄：{{ myAge }}</div>
    <button @click="sendStudentName()">把学生名称给APP组件</button>
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
      // 触发Student组件实例身上的事件
      this.$emit("getStudentName", this.name);
    },
  },
};
</script>

<style scoped>
.student {
  background-color: blueviolet;
}
</style>