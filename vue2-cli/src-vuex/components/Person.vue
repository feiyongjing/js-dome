<template>
<div>
    <h1>人员列表</h1>
    <h1>Count组件的求和是{{sum}}</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加用户</button>
    <button @click="addPersonServer">添加一个用户，用户名称随机</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Person",
  data() {
    return {
      name:""
    };
  },
  computed: {
    ...mapState('countAbout',["sum"]),
    ...mapState('personAbout',["personList"]),
  },
  methods:{
    add(){
        const personObj={id:Date.now(),name:this.name}
        // 注意如果使用的是模块化的store，第一参数通过 模块名称/函数名称 调用对应store模块化Mutations中的函数
        this.$store.commit("personAbout/addPerson",personObj)
        this.name=""
    },
    ...mapActions('personAbout',["addPersonServer"])
  }
};
</script>

<style scoped>
</style>