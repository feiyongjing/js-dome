<template>
  <div class="school">
    <h3>学校名称：{{ schoolName }}</h3>
    <h3>学校地址：{{ address }}</h3>
    <button @click="showName">点我弹出学习名称</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        schoolName: "育才小学",
        address: "xxx省xxx市xxx区xxx街道23号",
      };
    },
    methods: {
      showName() {
        alert(this.schoolName);
      },
    },
  };
</script>

<style>
.school {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
</style>