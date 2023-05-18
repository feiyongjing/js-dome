<template>
  <!-- vue3组中的模板可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2 v-if="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>职业：{{ person.job.type }}</h2>
  <h2>薪资：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>

  <h2 v-if="person.sex">性别：{{ person.sex }}</h2>

  <button @click="changeInfo">修改信息</button>

  <button @click="delName">删除名称</button>
  <button @click="addSex">添加性别</button>
</template>

<script>
// 如果数据需要响应式的变化，即数据只要发生变化那么模板的数据也随之变化
// 引入ref函数和reactive实现响应式

// ref函数可以让基本类型数据和对象类型数据都做到响应式，但是其实ref对对象类型数据的操作还是借助的reactive
// ref使用如下，ref的缺点是获取数据必须通过 .value 获取，并且在setup的返回值中大量声明数据名称
// 基本类型数据定义  let name = ref("张三");
// 获取基本类型数据  name.value
// 对象类型数据定义  let job = ref({type:'前端工程师',salary:'30k'})
// 获取对象类型数据  job.value.type

// reactive只能让对象类型数据做到响应式
// 数据定义  let job = reactive({type:'前端工程师',salary:'30k'})
// 获取数据  job.type
import { ref, reactive } from "vue";

export default {
  name: "App",
  components: {},

  // vue2中的data、methods、等都写在setup中
  // setup不能被async修饰，因为返回值不再是return的对象，而是promise对象，模板看不到return对象中的属性了
  setup() {
    // 直接定义变量数据
    let person = reactive({
      name: "张三",
      age: "18",
      job: {
        type: "前端工程师",
        salary: "30k",
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });

    function changeInfo() {
      person.name = "李四";
      person.age = 20;
      person.job.type = "UI工程师";
      person.job.salary = "60k";
      // 在vue3中可以直接通过数组索引修改数组数据，这是vue2无法做到的
      person.hobby[0] = "游戏";
    }

    function delName() {
      // 删除属性
      delete person.name;
    }

    function addSex() {
      // 添加属性
      person.sex = "男";
    }

    // 返回一个对象包含的data和函数可以直接在模板中使用
    return {
      person,
      changeInfo,
      delName,
      addSex,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
