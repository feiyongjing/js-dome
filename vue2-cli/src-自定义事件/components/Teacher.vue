<template>
  <div class="teacher">
    <div>教师名称：{{ name }}</div>
    <div>教师性别：{{ sex }}</div>
    <div>教师年龄：{{ myAge }}</div>
    <button @click="sendTeacherName()">把教师名称给APP组件</button>
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
      // 触发Teacher组件实例身上的事件
      this.$emit("getTeacherName", this.name);
    },
  },
};
</script>

<style scoped>
.teacher {
  background-color: rgb(166, 251, 149);
}
</style>