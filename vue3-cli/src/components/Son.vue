<template>
  <div class="son">
    <h3>我是Son组件（孙）</h3>
  </div>
  <Dialog/>
</template>

<script>
import Dialog from "./Dialog.vue";

export default {
  name: "Son",
  components: { Dialog },

  setup() {
    return {};
  },
};
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>