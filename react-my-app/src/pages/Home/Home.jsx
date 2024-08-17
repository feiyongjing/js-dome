import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';



export default function Home() {
    return (
        <div >
            <h2>我是Home的内容</h2>
            {/* 多级路由的路径不用写完整路径，而是直接写当前路由的路径（默认会自动继承父路由前缀的），
                注意多级路由路径不要在开头写/，而是要么直接写 路径 或者 ./路径
                如下多级路由路径直接写 news 或者 ./message */}
            <NavLink to="news">News</NavLink>
            <br />
            <NavLink to="./message">Message</NavLink>

            {/* Outlet标签设置路由标签注册出现的位置（和插槽的作用类似） */}
            <Outlet/>
        </div>
    )
}
