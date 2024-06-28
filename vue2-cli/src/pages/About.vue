<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",

  // 组件内路由守卫：通过路由规则进入该组件时被调用，3个参数默认有不同的用处
  // to 参数是切换路由时路由的终点路由
  // from 参数是切换路由时路由的起点路由
  // next 参数是一个函数变量，被调用就跳转到下一个路由，不被调用则路由被拦截下来了
  beforeRouteEnter: (to, from, next) => {
    console.log("路由去向", to);
    console.log("来源路由", from);

    // 检查是否有权限查看页面
    if (to.meta.isAuth) {
      // 检查浏览器的localStorage是否包含指定数据
      if (localStorage.getItem("school") === "育才小学") {
        next();
      } else {
        alert("localStorage中必须有school: 育才小学 才能跳转路由");
      }
    } else {
      next();
    }
  },

   // 组件内路由守卫：通过路由规则离开该组件时被调用，2个参数默认有不同的用处
   // to 参数是切换路由时路由的终点路由
   // from 参数是切换路由时路由的起点路由
   // next 参数是一个函数变量，被调用就跳转到下一个路由，不被调用则路由被拦截下来了
   beforeRouteLeave: (to, from, next) => {
    // next如果不被调用则路由不会切换到其他的路由
    // next()
    next()
   }
};
</script>