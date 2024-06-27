// 引入VueRouter插件
import VueRouter from 'vue-router'

// 引入路由需要的路由组件，路由组件一般放在pages目录中，而一般组件放在components目录中
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'


// 创建并暴露一个路由器
export default new VueRouter({
    // 设置不同路径路由到不同的组件
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            // 设置子路由，路由到不同的组件
            children: [
                {
                    path: "message",   // 注意子路由是不需要添加/前缀
                    component: Message,
                    children: [
                        {
                            name: 'detail',   // 给路由命名后在to的对象写法中可以使用name简化过长的path
                            path: "detail",   // 注意子路由是不需要添加/前缀
                            component: Detail,
                        }
                    ]
                },
                {
                    path: "news",
                    component: News
                }
            ]
        }
    ]
})