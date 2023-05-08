<template>
  <div>
    <h5>浏览器的本地缓存LocalStorage是根据域名分配的,在关闭浏览器后下次打开依然存在，除非手动清空浏览器的缓存</h5>
     <h5>SessionStorage的存储大小是5Mb</h5>
    <h5>以下操作都只能对浏览器当前域名下的LocalStorage操作</h5>
    <button @click="saveData">添加一些数据保存到浏览器的LocalStorage</button>
    <button @click="readData">从浏览器的LocalStorage读取一些数据</button>
    <button @click="deleteData">删除浏览器的LocalStorage中的一些数据</button>
    <button @click="clearData">清除浏览器的LocalStorage中的全部数据</button>
  </div>
</template>

<script>
export default {
    name:"LocalStorage",
    data(){
        return {

        }
    },
    methods:{
        saveData(){
            localStorage.setItem("msg","hello world!")
            localStorage.setItem("person",JSON.stringify({name:"张三",age:"18"}))
        },
        readData(){
            // 如果读取的key不存在则会返回null
            let msg=localStorage.getItem("msg")
            let person=localStorage.getItem("person") //返回的是字符串
            // let person=JSON.parse(localStorage.getItem("person"))  转换为对象
            console.log(person)
            return alert("LocalStorage缓存："+msg+person)
        },
        deleteData(){
            localStorage.removeItem("msg")
            localStorage.removeItem("person")
        },
        clearData(){
            localStorage.clear()
        }

    }

};
</script>

<style scoped>
button{
 font-size: 12px;
}
</style>