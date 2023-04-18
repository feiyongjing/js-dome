// 该文件是整个项目的入口文件
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 创建Vm，vm管理App容器，并将App组件放入App容器
new Vue({
  render: h => h(App),
}).$mount('#app')
