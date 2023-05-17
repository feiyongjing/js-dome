// 引入VueRouter插件
import VueRouter from 'vue-router'

// 引入路由需要的路由组件，路由组件一般放在pages目录中，而一般组件放在components目录中
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'


// 创建并暴露一个路由器
const router = new VueRouter({
    // 设置不同路径路由到不同的组件
    routes: [
        {
            name: 'about',
            path: "/about",
            component: About,
            // meta是用于配置一些元数据，通常这些元数据会在路由首位中使用
            meta: {
                title: "关于"   // 目前是在路由守卫中获取title数据替换跳转路由的页签
            }
        },
        {
            name: 'home',
            path: "/home",
            component: Home,
            // meta是用于配置一些元数据，通常这些元数据会在路由首位中使用
            meta: {
                title: "首页"   // 目前是在路由守卫中获取title数据替换跳转路由的页签
            },
            // 设置子路由，路由到不同的组件
            children: [
                {
                    name: 'message',
                    path: "message",   // 注意子路由是不需要添加/前缀
                    component: Message,
                    children: [
                        {
                            name: 'detail',   // 给路由命名后在to的对象写法中可以使用name简化过长的path
                            path: "detail/:id/",   // 注意子路由是不需要添加/前缀，:id是对于params路径参数的占位
                            component: Detail,

                            // props的第一种写法，值为对象
                            // 该对象中的所有key-value都会以props的形式传递给对应的路由组件（这里是Detail组件）
                            // 在对应的路由组件中使用props进行接收参数（和父组件给子组件传递数据时子组件使用props接收数据一样）
                            // 第一种写法的缺点是传递的key-value是固定的常量，无法变化
                            // props:{id:"333",title:"你好啊！"}

                            // props的第二种写法，值为布尔，若布尔值为真，
                            // 就会把该路由组件收到的所有params参数，以props的形式传给对应的路由组件（这里是Detail组件）
                            // 第二种写法的缺点是只能传递所有params参数，无法传递query参数
                            // props: true

                            // props的第三种写法，值为函数，把返回值以props的形式传给对应的路由组件（这里是Detail组件）
                            // 优点是即可以传递params参数又可以传递query参数
                            props($route) {
                                return {
                                    id: $route.params.id,      // params参数传递
                                    title: $route.query.title  // query参数传递
                                }
                            },
                        }
                    ],
                    // meta是用于配置一些元数据，通常这些元数据会在路由首位中使用
                    meta: {
                        isAuth: true,   // 目前是在路由守卫中判断isAuth来确认是否有权限切换到该路由
                        title: "消息"   // 目前是在路由守卫中获取title数据替换跳转路由的页签
                    }
                },
                {
                    name: 'news',
                    path: "news",
                    component: News,
                    // meta是用于配置一些元数据，通常这些元数据会在路由首位中使用
                    meta: {
                        isAuth: true,   // 目前是在路由守卫中判断isAuth来确认是否有权限切换到该路由
                        title: "新闻"   // 目前是在路由守卫中获取title数据替换跳转路由的页签
                    },

                    // 独享前置路由守卫：设置初始化或者是在每次切换到该路由时被调用的函数，3个参数默认有不同的用处
                    // 注意独享路由没有后置路由守卫，只能使用全局后置路由守卫处理路由切换后的事情
                    beforeEnter: (to, from, next) => {
                        // to是切换路由时路由的终点路由
                        console.log("路由去向", to)
                        // from 是切换路由时路由的起点路由
                        console.log("来源路由", from)
                        // next如果不被调用则路由被拦截下来了
                        // next()
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === '育才小学') {
                                next()
                            } else {
                                alert("localStorage中必须有school: 育才小学 才能跳转路由")
                            }
                        } else {
                            next()
                        }
                    }
                }
            ]
        }
    ]
})


// 全局前置路由守卫：设置初始化或者是在每次路由切换之前被调用的函数，3个参数默认有不同的用处
// router.beforeEach((to, from, next) => {
//     // to是切换路由时路由的终点路由
//     console.log("路由去向", to)
//     // from 是切换路由时路由的起点路由
//     console.log("来源路由", from)
//     // next如果不被调用则路由被拦截下来了
//     // next()
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === '育才小学') {
//             next()
//         } else {
//             alert("localStorage中必须有school: 育才小学 才能跳转路由")
//         }
//     } else {
//         next()
//     }
// })



// 全局后置路由守卫：设置初始化或者是在每次路由切换之后被调用的函数，2个参数默认有不同的用处
router.afterEach((to, from) => {
    // to是切换路由时路由的终点路由
    console.log("路由去向", to)
    // from 是切换路由时路由的起点路由
    console.log("来源路由", from)

    // 获取去向路由的meta元数据中获取数据替换页签，如果没有就是默认的透明系统
    document.title = to.meta.title || "透明系统"
})


export default router 