<template>
  <ul>
    <!-- 如果路由没有设置props时，从路由中获取携带的params参数 -->
    <!-- <li>消息编号:{{$route.params.id}}</li>
    <li>消息标题:{{$route.params.title}}</li> -->


    <!-- 如果路由有设置props时，通过props获取路由传递的参数直接使用 -->
    <li>消息编号:{{id}}</li>
    <li>消息标题:{{title}}</li>
  </ul>
</template>

<script>
export default {
name:"Detail",

props:['id','title']

}
</script>

<style scope>

</style>