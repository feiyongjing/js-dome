<template>
  <div class="box" v-if="total">
    <span class="statistics"
      ><input type="checkbox" v-model="isAll" />全选 以完成{{
        doneTotal
      }}/全部{{ total }}</span
    >
    <button class="btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data() {
    return {};
  },
  // 接收APP组件的函数
  props: ["todos"],
  computed: {
    isAll: {
      // 判断是否全部勾选
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      // 调用App组件的函数全部勾选或全部取消勾选
      set(value) {
        this.$bus.$emit("checkAllTodo", value);
      },
    },

    // 统计已经勾选的数量
    doneTotal() {
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0);
      }, 0);
    },

    // 全部列表数量
    total() {
      return this.todos.length;
    },
  },
  methods: {
    // 调用App组件的函数清除以完成的任务
    clearAll() {
      this.$bus.$emit("clearAllTodo");
    },
  },
};
</script>

<style scoped>
.box {
  margin: auto;
  width: 350px;
  height: 24.44px;
  border: 3px solid black;
  position: relative;
}

.statistics {
  position: absolute;
  left: 0px;
  top: 0px;
}

.btn-danger {
  color: red;
  text-align: right;
  font-size: 12px;
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>