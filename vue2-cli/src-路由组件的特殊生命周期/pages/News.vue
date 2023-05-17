<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },

  // activated是路由组件独有的生命周期，当组件激活出现在页面中时调用
  activated() {
    console.log("News组件激活了")
    setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    });
  },

// deactivated是路由组件独有的生命周期，当组件失活消失在页面中时调用
  deactivated() {
    console.log("News组件失活了")
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
</style>