// 引入的不再是Vue的构造函数了，而是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 调用工厂函数createApp生成应用实例对象（类似于vue2的vm,但是比vm“轻”），并与标签id属性是app的标签绑定挂载
const app=createApp(App)
app.mount('#app')


// 需要注意的是vue2中的Vue.xxx 等配置全部都转移到了createApp(App)返回的应用实例对象上了
// 例如 Vue.use()  在vue3中是createApp(App).use()
