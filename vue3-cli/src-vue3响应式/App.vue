<template>
  <!-- vue3组中的模板可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职业：{{ job.type }}</h2>
  <h2>薪资：{{ job.salary }}</h2>
  <h2>爱好：{{ hobby }}</h2>
  <button @click="sayHello">说话</button>
  <button @click="changeInfo">修改信息</button>
</template>

<script>

// 如果数据需要响应式的变化，即数据只要发生变化那么模板的数据也随之变化
// 引入ref函数和reactive实现响应式

// ref函数可以让基本类型数据和对象类型数据都做到响应式，但是其实ref对对象类型数据的操作还是借助的reactive
// ref使用
// 基本类型数据定义  let name = ref("张三");  
// 获取基本类型数据  name.value
// 对象类型数据定义  let job = ref({type:'前端工程师',salary:'30k'})
// 获取对象类型数据  job.value.type

// reactive只能让对象类型数据做到响应式
// 数据定义  let job = reactive({type:'前端工程师',salary:'30k'})
// 获取数据  job.type
import {ref,reactive} from 'vue'

export default {
  name: "App",
  components: {},

  // vue2中的data、methods、等都写在setup中
  // setup不能被async修饰，因为返回值不再是return的对象，而是promise对象，模板看不到return对象中的属性了
  setup() {
    // 直接定义变量数据
    let name = ref("张三");
    let age = ref(18);

    let job=reactive({
      type:'前端工程师',
      salary:'30k'
    })

    let hobby=reactive(['抽烟','喝酒','烫头'])

    // 直接写method
    function sayHello() {
      alert("我的姓名是" + name.value + "，年龄是" + age.value + "，你好啊！");
    }

    function changeInfo(){
      name.value="李四"
      age.value=20
      job.type='UI工程师'
      job.salary='60k'
      // 在vue3中可以直接通过数组索引修改数组数据，这是vue2无法做到的
      hobby[0]='游戏'
    }

    // 返回一个对象包含的data和函数可以直接在模板中使用
    return {
      name,
      age,
      job,
      hobby,
      sayHello,
      changeInfo
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
