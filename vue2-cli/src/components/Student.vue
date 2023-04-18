<template>
  <div class="student">
    <div>学生名称：{{ studentName }}</div>
    <div>学生年龄：{{ age }}</div>
  </div>
</template>

<script>

export default {

  name: "Student",

  data() {
    return {
      studentName: "张三",
      age: 18,
    };
  },
};
</script>

<style>
.Student {
  width: 100px;
  height: 100px;
  background-color: blueviolet;
}
</style>