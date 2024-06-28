// 引入VueRouter插件
import VueRouter from 'vue-router'

// 引入路由需要的路由组件，路由组件一般放在pages目录中，而一般组件放在components目录中
import About from '../pages/About'
import Home from '../pages/Home'


// 创建并暴露一个路由器
const router = new VueRouter({
    // 设置不同路径路由到不同的组件
    routes: [
        {
            name: 'about',
            path: "/about",
            component: About,
            // meta是用于配置一些元数据，通常这些元数据会在路由守卫中使用
            meta: {
                title: "关于",   // 目前是在路由守卫中获取title数据替换跳转路由的页签
                isAuth: true,   // 目前是在路由守卫中判断isAuth来确认是否有权限切换到该路由
            },
        },
        {
            name: 'home',
            path: "/home",
            component: Home,
            // meta是用于配置一些元数据，通常这些元数据会在路由守卫中使用
            meta: {
                title: "首页",   // 目前是在路由守卫中获取title数据替换跳转路由的页签
                isAuth: false,   // 目前是在路由守卫中判断isAuth来确认是否有权限切换到该路由
            },
        }
    ]
})

export default router 