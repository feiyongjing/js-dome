<template>
  <div>
    <ul>
      <li>news001 <input type="text"></li>
      <li>news002 <input type="text"></li>
      <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  mounted() {
    console.log("News组件挂载完毕了！");
  },
  beforeDestroy() {
    console.log("News组件即将被销毁了！");
  },

};
</script>

<style scoped>
</style>