<template>
  <ul>
    <!-- 从路由中获取携带的query参数 -->
    <li>消息编号:{{$route.query.id}}</li>
    <li>消息标题:{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
name:"Detail",

}
</script>

<style scope>

</style>