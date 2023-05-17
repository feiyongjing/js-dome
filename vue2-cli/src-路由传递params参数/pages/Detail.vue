<template>
  <ul>
    <!-- 从路由中获取携带的params参数 -->
    <li>消息编号:{{$route.params.id}}</li>
    <li>消息标题:{{$route.params.title}}</li>
  </ul>
</template>

<script>
export default {
name:"Detail",

}
</script>

<style scope>

</style>