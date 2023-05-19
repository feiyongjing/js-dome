<template>
  <h1>{{ sum }}</h1>
  <button @click="sum++">点我加1</button>
  <hr />
  <h2>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
</template>

<script>
// 在setup在使用组合式API写生命周期，
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

// 引入自定义的hook函数，本质上是把setup中使用的Composition API进行了封装，使得多个组件都可以复用代码
import usePoint from "../hooks/usePoint";

export default {
  name: "Demo",
  components: {},

  setup() {
    // 直接定义变量数据
    let sum = ref(0);

    // 获取点位数据，至于点位数据的维护由引入hook代码内部维护
    let point=usePoint()
    

    // 返回一个对象包含的data、函数、计算属性可以直接在模板中使用
    return {
      sum,
      point,
    };
  },
};
</script>

<style>
</style>