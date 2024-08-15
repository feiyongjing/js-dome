import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function About() {

    const [sum, setSum] = useState(1)

    return (
        <div >
            <h2>我是About的内容，sum的值是{sum}，如果sum的值变为2就进行路由跳转到home</h2>
            {sum === 2 ?
                <Navigate to="/home" />
                :
                <button onClick={() => { setSum(2) }}>点我sum变为2</button>
            }
        </div>
    )
}
