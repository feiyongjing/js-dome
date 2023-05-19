<template>
  <!-- vue3组中的模板可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试一下触发App组件的hello事件</button>
  <slot name="qwe"></slot>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Demo",
  components: {},

  props: ["msg", "school"],
  emits: ["hello"],
  // vue2中的data、methods、等都写在setup中
  // setup不能被async修饰，因为返回值不再是return的对象，而是promise对象，模板看不到return对象中的属性了
  // setup会在beforeCreate(最早的生命周期)之前执行一次，这时的this是undefined
  // setup的第一参数props是父组件传递的props，props必须和vue2一样在外面声明接收否则会有警告
  // setup的第二参数context中存储了一下上下文信息，其中主要是context.attrs、context.emit、context.slots
  // context.attrs是用于props的兜底，即如果没有向vue2一样在外面声明接收的属性数据会存放到这里面
  // context.emit是用于触发组件绑定的事件，但是必须在被绑定的组件中使用emits声明该组件绑定了哪些组件否则会出现警告
  // context.slots是用于存放父组件传递的全部插槽内容信息
  setup(props, context) {
    console.log("父组件传递的全部插槽内容信息", context.slots);

    // 直接定义变量数据
    let person = reactive({
      name: "张三",
      age: "18",
    });

    function test() {
      context.emit("hello", 666);
    }

    // 返回一个对象包含的data和函数可以直接在模板中使用
    return {
      person,
      test,
    };
  },
};
</script>

<style>
</style>