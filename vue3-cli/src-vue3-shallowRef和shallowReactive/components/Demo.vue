<template>
  <h1>a的值是{{ sum.a }}</h1>
  <button @click="sum.a++">点我a加一</button>
  <h1>姓名：{{ person.name }}</h1>
  <h1>年龄：{{ person.age }}</h1>
  <h1>薪资：{{ person.job.j1.salary }}K</h1>
  <button @click="person.name += '!'">修改姓名</button>
  <button @click="person.age++">年龄增长</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
// shallowRef和shallowReactive组合式API都只能做浅层次的响应式
import { ref, reactive, shallowRef,shallowReactive} from "vue";

export default {
  name: "Demo",
  components: {},

  setup() {
    // ref对于对象类型数据会做深层次的响应式
    // let sum = ref({a:0});
    // 而shallowRef于ref相比不会对象类型数据做深层次的响应式
    // 即a的值在页面不会变化，但是通过vue开发工具可以看到a的值在发生变化
    let sum = shallowRef({a:0});

    // reactive对于对象类型数据会做深层次的响应式
    // let person = reactive({
    //   name: "张三",
    //   age: 18,
    //   job: {
    //     j1: {
    //       salary: 20,
    //     },
    //   },
    // });
    // 而shallowReactive于reactive相比不会对象类型数据做深层次的响应式
    // 即当前salary薪资在页面中不会变化的，但是通过vue开发工具可以看到salary薪资在发生变化
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    return {
      sum,
      person
    };
  },
};
</script>

<style>
</style>