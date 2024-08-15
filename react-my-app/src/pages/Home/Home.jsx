import React from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import News from '../News/News'
import Message from '../Message/Message'


export default function Home() {
    return (
        <div >
            <h2>我是Home的内容</h2>
            {/* 多级路由Link和注册的注意点就是路由的路径一定要写完整路径，
        即链接和注册子路由时需要在父路由的path后面添加路径 */}
            <NavLink to="/home/news">News</NavLink>
            <br />
            <NavLink to="/home/message">Message</NavLink>

            <Routes>
                <Route path="/home/news" component={News} />
                <Route path="/home/message" component={Message} />

                <Route path="/home/" element={<Navigate to="/home/message" />} />
            </Routes>
        </div>
    )
}
