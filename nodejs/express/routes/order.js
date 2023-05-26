// 导入express模块，这不是nodejs内置模块需要提前npm i express
const express = require('express');

// 引入拦截器函数
const checkCodeMiddleware=require('../interceptor/checkCodeMiddleware')

const router= express.Router()

// 使用 :参数名称 在url在占位，接收占位传递的参数
// checkCodeMiddleware是当前路由的拦截器
router.get('/order/:id', checkCodeMiddleware, (request, response) => {
    console.log("获取请求url中id占位的路径参数是", request.params.id)

    response.send('hello express')
})

module.exports=router

// powershell和cmd的curl命令替换为curl.exe
// git Bash 可以使用curl


// /order/:id 发起Get请求携带路径参数
// curl  "http://127.0.0.1:9000/order/12345?code=521"