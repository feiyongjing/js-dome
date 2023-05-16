<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home组件挂载完毕了！");
  },
  beforeDestroy() {
    console.log("Home组件即将被销毁了！");
  },
};
</script>