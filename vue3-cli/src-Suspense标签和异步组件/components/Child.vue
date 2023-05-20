<template>
  <div class="child">
    <h3>我是Child组件（子）</h3>
    {{sum}}
  </div>
  
</template>

<script>
import {ref} from 'vue'

export default {
  name: "Child",


  // setup使用async并返回Promise对象的前提是该组件被异步引入
  // 并且使用Suspense标签包裹该组件标签
  async setup(){

    let sum=ref(0)
    let p= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({sum})
      },3000)
    })
    return await p
  }
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>