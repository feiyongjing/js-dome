<template>
  <!-- 组件的template是由当前项目package.json中的配置"vue-template-compiler": "^2.6.14"渲染的 -->
  <div id="app">
    <!-- assets文件夹一般都是放静态资源 -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <School></School> -->

    <Top />
    <Todos />

    <LocalStorage />
    <SessionStorage />
  </div>
</template>

<script>
// components文件夹下放App组件之外的所以组件
import School from "./components/School.vue";
import Top from "./components/Top.vue";
import Todos from "./components/Todos.vue";

import LocalStorage from "./components/LocalStorage.vue";
import SessionStorage from "./components/SessionStorage.vue";

export default {
  name: "App",
  components: {
    School,
    Top,
    Todos,
    LocalStorage,
    SessionStorage,
  },
  data() {
    return {
      // 从sessionStorage获取数据，当sessionStorage中的数据是null时获取默认的初始化数据
      // todos: JSON.parse(sessionStorage.getItem("todos")) || [
      //   { id: "001", title: "抽烟", done: true },
      //   { id: "002", title: "喝酒", done: false },
      //   { id: "003", title: "烫头", done: true },
      // ],
    };
  },

  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 10px;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}
</style>
