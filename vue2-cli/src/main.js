import Vue from 'vue'
import App from './App'

// 需要提前npm i element-ui 安装element-ui
// 引入ElementUI组件库和全部样式，缺点是实际开发根本用不到全部的组件和样式，会导致用户浏览器下载展示的js文件过大
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 按照需要引入对应的ElementUI组件
import { Button, Row,DatePicker } from 'element-ui';


// 关闭Vue的生产提示
Vue.config.productionTip = false

// 应用ElementUI全部插件
// Vue.use(ElementUI);

// 按需引用ElementUI组件
Vue.use(Button)
Vue.use(Row)
Vue.use(DatePicker)

const vm=new Vue({
  render: h => h(App),
}).$mount('#app')
