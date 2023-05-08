<template>
  <!-- 组件的template是由当前项目package.json中的配置"vue-template-compiler": "^2.6.14"渲染的 -->
  <div id="app">
    <!-- assets文件夹一般都是放静态资源 -->
    <img alt="Vue logo" src="./assets/logo.png" />

  </div>
</template>

<script>
// components文件夹下放App组件之外的所以组件
// import School from "./components/School.vue";


export default {
  name: "App",
  components: {

  },
  data() {
    return {

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
