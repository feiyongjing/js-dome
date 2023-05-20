<template>
  <div class="app">
    <h3>我是App组件（父）</h3>

    <!-- 使用异步组件需要使用Suspense标签包裹 -->
    <Suspense>
      <!-- 默认加载异步组件到插槽中渲染 -->
      <template v-slot:default>
        <Child />
      </template>
      <!-- 如果异步组件没有加载好会先加载v-slot:fallback插槽中的内容渲染 -->
      <template v-slot:fallback>
        <h3>稍等，需要3秒加载</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue";  静态引入会让所有的静态组件一起加载好了渲染到浏览器

// 静态组件不会等异步组件加载好了渲染到浏览器，所有异步组件会延迟一些后再渲染到页面上
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue")); // 异步组件引入

export default {
  name: "App",
  components: { Child },

  setup() {
    return {};
  },
};
</script>

<style>
.app {
  background-color: grey;
  padding: 10px;
}
</style>
