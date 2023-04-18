<template>
    
    <div class ="school">
           <div>学校名称：{{schoolName}}</div>
           <div>学校地址：{{address}}</div>
           <button @click="showName">点我弹出学习名称</button>
           <!-- 直接将子组件的名称当成标签使用 -->
           <Student></Student>
    </div>
</template>

<script>
import Student from "./Student.vue";

export default {
  name: "School",
  data() {
    return {
      schoolName: "育才小学",
      address: "xxx省xxx市xxx区xxx街道23号",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },

  components: {
    Student,
  },
};
</script>

<style>
.school {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
</style>