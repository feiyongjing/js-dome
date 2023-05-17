// 引入VueRouter插件
import VueRouter from 'vue-router'

// 引入路由需要的路由组件，路由组件一般放在pages目录中，而一般组件放在components目录中
import About from '../pages/About'
import Home from '../pages/Home'
import Massage from '../pages/Massage'
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
                    path: "massage",   // 注意子路由是不需要添加/前缀
                    component: Massage,
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
                            props($route){
                                return {
                                    id:$route.params.id,      // params参数传递
                                    title:$route.query.title  // query参数传递
                                }
                            }
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