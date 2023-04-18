<template>
  <!-- 组件对应的html模板，注意根节点只能有一个，如果有多个请在外面包裹一层div -->
  <div class="student">
    <h3>学生名称：{{ studentName }}</h3>
    <h3>学生年龄：{{ age }}</h3>
  </div>
</template>

<script>
// 使用组件第一步：创建student组件
export default {
  // el: ".xxx", 组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个Vm管理，由vm决定服务于谁

  // name:'组件的name属性设置开发者工具中显示的组件名称，但是无法影响组件注册和在html中使用时的组件名称',
  name: "Student",

  // 在组件的定义中data需要写成函数，函数的返回值是最终需要的数据
  // 原因是组件有多处地方使用导致需要多份data数据并且互不干扰
  data() {
    return {
      studentName: "张三",
      age: 18,
    };
  },
};
</script>

<style>
.Student {
  width: 100px;
  height: 100px;
  background-color: blueviolet;
}
</style>