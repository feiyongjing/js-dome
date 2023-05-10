<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 作用域插槽，向插槽的使用者传递一些数据，和props类似 -->
    <slot :films="films"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      films: ["《教父》", "《拆弹专家》", "《黑客帝国》", "《生化危机》"],
    }
  },
  props: ["title"],
  methods: {},
};
</script>

<style scoped>
.category {
  background-color: aquamarine;
  width: 200px;
  height: 300px;
}
h3{
  text-align: center;
  background-color: orange;
}
</style>