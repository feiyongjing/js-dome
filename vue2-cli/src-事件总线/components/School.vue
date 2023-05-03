<template>
  <div class="school">
    <div>学校名称：{{ name }}</div>
    <div>学校地址：{{ address }}</div>
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
    sendTeacherName(teacherNam) {
      alert("学校组件接收到了教师组件发送的教师名称：" + teacherNam);
    },
  },

  mounted() {
    // 当前组件绑定事件到全局事件总线，第一参数是事件名称，后面的参数事件的回调函数
    this.$bus.$on("sendTeacherName", this.sendTeacherName);
  },

  beforeDestroy() {
    // 由于vc的销毁不会自动解绑全局事件中心的自定义事件，所以需要手动解绑，避免vc销毁了但是全局事件总线还残留了与它绑定的自定义事件
    this.$bus.$off("sendTeacherName");
  },
};
</script>

<style scoped>
.school {
  background-color: aquamarine;
}
</style>