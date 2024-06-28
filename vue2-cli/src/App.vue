<template>
  <div>
    <Banner />
    <router-link to="/about">About</router-link>
    <br/>
    <router-link to="/home">Home</router-link>
    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

