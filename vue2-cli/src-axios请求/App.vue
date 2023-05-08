<template>
  <div id="app">
    <h1>你好啊</h1>
    <School/>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: gray;
  text-align: center;
}
</style>
