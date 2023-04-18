<template>
  <div id="app">
    <!-- assets文件夹一般都是放静态资源 -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <School></School>
  </div>
</template>

<script>
// components文件夹下放App组件之外的所以组件
import HelloWorld from './components/HelloWorld.vue'
import School from "./components/School.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    School
  }
}
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
