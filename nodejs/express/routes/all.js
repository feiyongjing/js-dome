// 导入express模块，这不是nodejs内置模块需要提前npm i express
const express = require('express');

const router= express.Router()

// all函数代表该路由所有的http请求方式都生效：get、post、put等
// 如果第一参数路径写为 通配符 * 表示匹配域名后所有的路径
router.all('/all', (request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.send('/all 接收所有的请求方式: get、post、put等')
})


module.exports=router

// powershell和cmd的curl命令替换为curl.exe
// git Bash 可以使用curl

// /all 发起Get请求
// curl "http://127.0.0.1:9000/all"

// /all 发起Post请求
// curl -H “Content-Type: application/json” -X POST -d'{}' "http://127.0.0.1:9000/all"