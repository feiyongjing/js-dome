<template>
  <div id="app">
    <h1>你好啊</h1>
    <School  />
    <Student />
    <Teacher />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
import Teacher from "./components/Teacher.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
    Teacher,
  },
  data() {
    return {};
  },

  methods: {

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
