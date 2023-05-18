<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">回退</button>
    <button @click="froward">前进</button>
    <button @click="go">测试一下go</button>
  </div>
</template>

<script>
export default {
  name: "Banner",

  methods: {
    back() {
      // 页面回退到之前的页面
      this.$router.back();
    },
    froward() {
      // 页面前进到之前的页面
      this.$router.forward();
    },
    go(){
      // 页面前进或后退，传入的参数是正数就前进几次到之前的页面，负数就后退几次到之前的页面
      this.$router.go(-1);
    }
  },
};
</script>

<style>
</style>