// 导入express模块，这不是nodejs内置模块需要提前npm i express
const express = require('express');

// 导入body-parser模块，这不是nodejs内置模块需要提前npm i body-parser
// body-parser用于解析请求body数据
// body-parser使用参考 https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');


// 引入拦截器函数
const checkCodeMiddleware=require('../interceptor/checkCodeMiddleware')

// 创建路由对象
const router= express.Router()


// parse application/x-www-form-urlencoded 全局使用bodyParser包解析请求body的表单格式数据
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 全局使用bodyParser包解析请求body的json格式数据
// app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser 局部使用bodyParser包解析请求body的表单格式数据
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create application/json parser 局部使用bodyParser包解析请求body的json格式数据
var jsonParser = bodyParser.json()


// 创建路由
// 其实是不同的请求方法：get、post、put等
// 参数是域名后的路径、当前路由的拦截器（其实是spring的Aop类似）、 请求回调函数，请求回调函数中的参数封装了请求和响应的全部信息
router.get('/', checkCodeMiddleware, (request, response) => {

    console.log("获取请求的路径", request.path)
    console.log("获取请求跟在url后面的表单参数", request.query)
    console.log("获取请求的来源ip地址", request.ip)
    console.log("获取请求的请求头user-agent", request.get('user-agent'))

    // 重定向
    // response.redirect('http://xxx.com') 

    // 下载响应
    // response.download(__dirname+'/packages.json')

    // 直接设置json响应体（自动设置响应content-type是application/json;charset=utf-8）
    // response.json({ "name": "张三", "age": "18" })

    // 设置响应文件内容
    // response.sendFile(__dirname + './index.html')


    // 链式设置响应码、响应头、响应体，也可以单独设置
    response.status(200).set("Accept", "application/json").send('hello express')
})


// jsonParser是当前路由的拦截器，是bodyParser包解析请求body的拦截器，拦截器处理后request上就多了body属性
router.post('/test', jsonParser, (request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')

    console.log('请求body', request.body)

    // 返回响应，注意如果是返回中文需要在响应的content-type中设置utf-8
    response.send("你好啊")
})

module.exports=router

// powershell和cmd的curl命令替换为curl.exe
// git Bash 可以使用curl

// /home 发起Get请求，添加参数code=521可以请求成功，否则暗号错误
// curl  "http://127.0.0.1:9000/home?code=521"

// /test 发起Post请求
// curl -H "Content-Type: application/json" -X POST -d'{"user":"123","age":"18"}' "http://127.0.0.1:9000/home/test"