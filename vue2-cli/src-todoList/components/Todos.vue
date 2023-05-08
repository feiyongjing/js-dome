<template>
  <div>
    <ul>
      <Todo v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" />
    </ul>
    <Bottom :todos="todos"/>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import Bottom from "./Bottom.vue";
export default {
  name: "Todos",
  components: {
    Todo,
    Bottom,
  },
  data() {
    return {
      todos: JSON.parse(sessionStorage.getItem("todos")) || [
        { id: "001", title: "抽烟", done: true },
        { id: "002", title: "喝酒", done: false },
        { id: "003", title: "烫头", done: true },
      ],
    };
  },

  methods: {
    // 添加一个Tode
    addTodo(x) {
      console.log("APP组件收到了数据", x);
      // 向列表添加数据
      this.todos.unshift(x);
    },
    // 取消一个todo的勾选或者勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除一个Todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选和全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => (todo.done = done));
    },

    // 清除以完成的任务
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },



    // 修改一个todo
    updateTodo(id,title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
      });
    },
  },

  mounted() {
    // 当前组件绑定事件到全局事件总线，第一参数是事件名称，后面的参数事件的回调函数
    this.$bus.$on("getTodos", this.todos);
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("addTodo", this.addTodo);
    this.$bus.$on("deleteTodo", this.deleteTodo);
    this.$bus.$on("checkAllTodo", this.checkAllTodo);
    this.$bus.$on("clearAllTodo", this.clearAllTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
  },

  beforeDestroy() {
    // 由于vc的销毁不会自动解绑全局事件中心的自定义事件，所以需要手动解绑，避免vc销毁了但是全局事件总线还残留了与它绑定的自定义事件
    this.$bus.$off("getTodos");
    this.$bus.$off("checkTodo");
    this.$bus.$off("addTodo");
    this.$bus.$off("deleteTodo");
    this.$bus.$off("checkAllTodo");
    this.$bus.$off("clearAllTodo");
    this.$bus.$off("updateTodo");
  },
  watch: {
    // 开启深度监视数组中的数据变化
    todos: {
      deep: true,
      handler(value) {
        sessionStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0px;
}
</style>