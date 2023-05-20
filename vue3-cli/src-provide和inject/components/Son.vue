<template>
  <div class="son">
    <h3>我是Son组件（孙）{{car.name}}---{{car.price}}</h3>
  </div>
</template>

<script>

// provide函数给后代组件传递数据，后代组件使用inject函数收到数据
import { inject } from 'vue';
export default {
  name: "Son",

  setup(){

    // inject函数获取祖辈组件传递的数据，根据key获取
    let car= inject('car')

    return {
        car
    }
  }


};
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>