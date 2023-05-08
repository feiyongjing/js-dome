<template>
  <div>
    <h5>浏览器的本地缓存SessionStorage是根据域名分配的,在关闭浏览器后会消失</h5>
    <h5>SessionStorage的存储大小是5Mb</h5>
    <h5>以下操作都只能对浏览器当前域名下的SessionStorage操作</h5>
    <button @click="saveData">添加一些数据保存到浏览器的SessionStorage</button>
    <button @click="readData">从浏览器的SessionStorage读取一些数据</button>
    <button @click="deleteData">删除浏览器的SessionStorage中的一些数据</button>
    <button @click="clearData">清除浏览器的SessionStorage中的全部数据</button>
  </div>
</template>

<script>
export default {
    name:"SessionStorage",
    data(){
        return {

        }
    },
    methods:{
        saveData(){
            sessionStorage.setItem("msg","hello world!")
            sessionStorage.setItem("person",JSON.stringify({name:"张三",age:"18"}))
        },
        readData(){
            // 如果读取的key不存在则会返回null
            let msg=sessionStorage.getItem("msg")
            let person=sessionStorage.getItem("person") //返回的是字符串
            // let person=JSON.parse(SessionStorage.getItem("person"))  转换为对象
            console.log(person)
            return alert("SessionStorage缓存："+msg+person)
        },
        deleteData(){
            sessionStorage.removeItem("msg")
            sessionStorage.removeItem("person")
        },
        clearData(){
            sessionStorage.clear()
        }

    }

};
</script>

<style scoped>
button{
 font-size: 12px;
}
</style>