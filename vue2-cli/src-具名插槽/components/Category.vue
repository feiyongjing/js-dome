<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 具名插槽，根据插槽的name属性来插入内容 -->
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {},
  props: ["listData", "title"],
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