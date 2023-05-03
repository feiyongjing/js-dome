<template>
  <div class="student">
    <div>学生名称：{{ name }}</div>
    <div>学生性别：{{ sex }}</div>
    <div>学生年龄：{{ myAge }}</div>
    <div>混合code：{{code}}</div>
     <button @click="updateAge">点我获取学生年龄+1</button>
  </div>
</template>

<script>
// 引入公共混合代码
import {hunheCode} from "../js/hunhe.js";

export default {
  name: "Student",

  data() {
    return {
      myAge:this.age,
      // 与混合代码中定义的属性方法重名则混合代码中的属性方法会被覆盖，当然mounted的挂载则是都会生效的
      code:"A01"
    };
  },
  // 简单接收标签的属性
  // props:["name", "sex" ,"age"],

  // 接收标签的属性并且限制属性的类型
  // props: { name: "String", sex: "String", age: "Number" },

  // 接收标签的属性并且限制属性的类型、设置属性是否必传、属性不传设置的默认值
  props: {
    name: { type: String, required: true }, // required设置属性是否必传
    sex: { type: String, default: "未知的性别" }, // default设置属性不传时的默认值
    age: { type: Number, required: true },
  },

  methods:{
    updateAge(){
      // 不推荐直接修改props接收的属性，如果需要修改请在data中添加一个其他的属性引用props中需要修改的属性
      this.myAge++
    }
  },
  // 使用公共的混合代码
  mixins:[hunheCode]
};
</script>

<style scoped>
/* scoped 是表示当前样式只在当前的vue文件中生效，这是为了防止不同的vue文件或者是依赖库中有相同的样式选择器导致的冲突 */

.Student {
  width: 100px;
  height: 100px;
  background-color: blueviolet;
}
</style>