// 该文件是整个项目的入口文件
// 引入Vue，但是引入的残缺版的Vue，该vue是不包含模板解析器的，所以需要使用reande函数自行渲染模板
// 在node_modules下的vue包下的package.json中的属性"module": "dist/vue.runtime.esm.js"指向的残缺vue，
// 完整的Vue代码在dist/vue.js
// import Vue from 'vue/dist/vue'
// 不使用完整版的vue的原因是完整版的vue带有的模板解析器代码过多而在生产环境下使用的代码是webpack打包好的js代码，无需模板解析器解析vue文件到js代码
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入插件
import {myPlugin} from './js/plugins'
// 应用插件，第一个参数是插件，后面的其他参数依次对应插件install方法中参数的位置，注意install方法的第一个参数是Vue
Vue.use(myPlugin)
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 创建Vm，vm管理App容器，并将App组件放入App容器
new Vue({
  // reande函数是用于渲染模板
  render: h => h(App),
  
  beforeCreate(){
    // 安装全局数据总线，所有组件可以拿到Vue原型上的$bus，$bus应用当前应用的Vm后所有组件就可以操作$bus绑定事件和触发、解绑事件
    Vue.prototype.$bus=this  
  }
}).$mount('#app')
