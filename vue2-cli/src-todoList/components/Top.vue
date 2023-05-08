<template>
  <div class="todo-top">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      title:"",
    };
  },

  methods:{
    add(){
      // 校验输入的数据
      if(!this.title.trim()) return alert("输入不能为空")
      // 组建数据
      const todoObj={id:Date.now(),title:this.title,done:false}
      // 向app组件传递数据
      this.$bus.$emit("addTodo", todoObj);

      // 清空输入
      this.title=""
    }
  }
};
</script>

<style scoped>
.todo-top input {
  width: 350px;
  text-align: center;
}
</style>