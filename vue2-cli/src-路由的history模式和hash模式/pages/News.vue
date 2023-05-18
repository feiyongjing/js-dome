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
    console.log("News组件激活了");
    setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    });
  },

  // deactivated是路由组件独有的生命周期，当组件失活消失在页面中时调用
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  },

  // 组件内路由守卫：通过路由规则进入该组件时被调用，3个参数默认有不同的用处
  beforeRouteEnter: (to, from, next) => {
    // to是切换路由时路由的终点路由
    console.log("路由去向", to);
    // from 是切换路由时路由的起点路由
    console.log("来源路由", from);
    // next如果不被调用则路由被拦截下来了
    // next()
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "育才小学") {
        next();
      } else {
        alert("localStorage中必须有school: 育才小学 才能跳转路由");
      }
    } else {
      next();
    }
  },

   // 组件内路由守卫：通过路由规则离开该组件时被调用，3个参数默认有不同的用处
   beforeRouteLeave: (to, from, next) => {
    // next如果不被调用则路由不会切换到其他的路由
    // next()
    next()
   }
};
</script>

<style scoped>
</style>