<template>
  <div class="school">
    <!-- ref属性其实和id属性类似，js原生dom操作可以通过id属性获取元素，
           组件实例对象可以通过$refs.ref属性值获取带有该ref属性的元素
            -->
    <div ref="title">学校名称：{{ name }}</div>
    <div>学校地址：{{ address }}</div>
    <div>混合code：{{ code }}</div>
    <button @click="showName">点我弹出学习名称</button>
    <button @click="showNameDom">点我获取学习名称标签的Dom输出到控制台</button>
    <button @click="showCode">点我获取学习混合code输出到控制台</button>
    <h3>
      现在的时间格式化后是：{{
        Date.now() | timeFormater("YYYY-MM-DD HH:mm:ss")
      }}
    </h3>
    <!-- 直接将子组件的名称当成标签使用 -->
    <!-- age是Number类型所以需要使用:绑定data的属性并将js表达式"17"中的17当成Number类型 -->
    <Student name="张三" sex="男" :age="17" ref="stu"></Student>
    <button @click="showStudentDom">
      点我获取张三Student组件标签的Dom输出到控制台
    </button>
    <Student name="李四" sex="女" :age="18"></Student>
    <Student name="王五" :age="20"></Student>
  </div>
</template>

<script>
import Student from "./Student.vue";
// 引入公共混合代码
import { hunheCode, hunheCodeMethods } from "../js/hunhe.js";

export default {
  name: "School",
  components: {
    Student,
  },
  data() {
    return {
      name: "育才小学",
      address: "xxx省xxx市xxx区xxx街道23号",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
    showNameDom() {
      console.log(this.$refs.title); // 通过ref属性获取学校名称的真实Dom元素
    },
    showStudentDom() {
      console.log(this.$refs.stu); // 通过ref属性获取Student组件标签的实例对象（vc）
    },
  },

  // 全局混合在main.js设置
  // Vue.mixin(hunheCode)
  // Vue.mixin(hunheCodeMethods)
  // 局部混合：使用公共混合代码
  mixins: [hunheCode, hunheCodeMethods],
};
</script>

<style scoped>
/* scoped 是表示当前样式只在当前的vue文件中生效，这是为了防止不同的vue文件或者是依赖库中有相同的样式选择器导致的冲突 */

.school {
  font-size: 10px;
  background-color: aquamarine;
}
</style>