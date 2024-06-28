import Vue from 'vue'
import App from './App'
// 引入VueRouter插件
import VueRouter from 'vue-router'
// 引入路由，路由一般写在router目录下
import router from './router'

// 应用VueRouter插件
Vue.use(VueRouter)

// 关闭Vue的生产提示
Vue.config.productionTip = false


const vm=new Vue({
  // 使用路由
  router,
  render: h => h(App),
}).$mount('#app')
