// 引入的不再是Vue的构造函数了，而是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 调用工厂函数createApp生成应用实例对象（类似于vue2的vm,但是比vm“轻”），并与标签id属性是app的标签绑定挂载
createApp(App).mount('#app')
