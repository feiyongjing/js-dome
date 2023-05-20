<template>
  <div class="app">
    <h3>我是App组件（祖）{{car.name}}---{{car.price}}</h3>
    <Child />
  </div>
</template>

<script>

// provide函数给后代组件传递数据，后代组件使用inject函数收到数据
import { ref, reactive,provide } from "vue";
import Child from "./components/Child.vue";

export default {
  name: "App",
  components: { Child },

  setup() {
    let car = reactive({
      name: "奔驰",
      price: "40w",
    });

    // provide函数给后代组件传递数据，key和value
    provide('car',car)

    return {
      car
    };
  },
};
</script>

<style>
.app {
  background-color: grey;
  padding: 10px;
}
</style>
