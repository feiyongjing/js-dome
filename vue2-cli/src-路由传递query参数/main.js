// 该文件是整个项目的入口文件
// 引入Vue，但是引入的残缺版的Vue，该vue是不包含模板解析器的，所以需要使用reande函数自行渲染模板
// 在node_modules下的vue包下的package.json中的属性"module": "dist/vue.runtime.esm.js"指向的残缺vue，
// 完整的Vue代码在dist/vue.js
// import Vue from 'vue/dist/vue'
// 不使用完整版的vue的原因是完整版的vue带有的模板解析器代码过多而在生产环境下使用的代码是webpack打包好的js代码，无需模板解析器解析vue文件到js代码
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App'
// 引入VueRouter插件
import VueRouter from 'vue-router'
// 引入路由，路由一般写在router目录下
import router from './router'

// 应用VueRouter插件
Vue.use(VueRouter)

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vm，vm管理App容器，并将App组件放入App容器
const vm=new Vue({
  // 使用路由
  router,
  // reande函数是用于渲染模板
  render: h => h(App),
}).$mount('#app')
