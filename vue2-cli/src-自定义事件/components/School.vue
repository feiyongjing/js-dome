<template>
  <div class="school">
    <div>学校名称：{{ name }}</div>
    <div>学校地址：{{ address }}</div>
    <button @click="sendSchoolName()">把学校名称给APP组件</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "育才小学",
      address: "xxx省xxx市xxx区xxx街道23号",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },

  props: ["getSchoolName"],
};
</script>

<style scoped>
.school {
  background-color: aquamarine;
}
</style>