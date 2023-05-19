<template>
<Demo @hello="showHelloMsg" msg="你好啊" school="育才小学">

  <!-- 在vue3中具名插槽只能使用v-slot，而不能再写 slot="qwe" 了 -->
  <template v-slot:qwe>
    <span >前端工程师</span>
  </template>
</Demo>
</template>

<script>

import Demo from "./components/Demo.vue";

export default {
  name: "App",
  components: {Demo},

  setup(){
    function showHelloMsg(value){
      alert(`你好啊，你触发了hello事件，我收到的参数是：${value}！`)
    }

    return {
      showHelloMsg
    }
  }
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
