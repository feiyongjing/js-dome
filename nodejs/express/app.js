// 导入express模块，这不是nodejs内置模块需要提前npm i express
const express = require('express');
// 导入body-parser模块，这不是nodejs内置模块需要提前npm i body-parser
// body-parser用于解析请求body数据
// body-parser使用参考 https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');

// 导入fs模块
const fs = require('fs');
const path = require('path');

// 创建应用对象
const app = express()

// 申明中间件函数
function recordMiddleware(request, response, next) {
    // 获取请求的ip和路径存放在access.log文件中
    fs.appendFileSync(path.resolve(__dirname, "access.log"), request.ip + request.path + '\r\n')
    // next如果不被调用则请求被拦截下来了
    next()
}


// 申明中间件函数
function checkCodeMiddleware(request, response, next) {
    if (request.query.code !== '521') {
        // 注意send后不要添加代码
        response.send('暗号错误')
    } else {
        // next如果不被调用则请求被拦截下来了
        next()
    }

}


// parse application/x-www-form-urlencoded 全局使用bodyParser包解析请求body的表单格式数据
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 全局使用bodyParser包解析请求body的json格式数据
// app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser 局部使用bodyParser包解析请求body的表单格式数据
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create application/json parser 局部使用bodyParser包解析请求body的json格式数据
var jsonParser = bodyParser.json()


// 使用中间件函数做全局路由拦截器
// 注意use必须在所有的路由创建之前调用，否则全局路由拦截器失效
app.use(recordMiddleware)


// 静态资源文件获取设置
app.use(express.static(__dirname+'/public'))
// 以下url获取当前项目的静态资源
// curl  "http://127.0.0.1:9000/html/index.html"
// curl  "http://127.0.0.1:9000/img/favicon.ico"

// 如果前端的静态资源和后端的接口路径冲突了，那么哪边的代码先执行（代码自上而下）就哪边处理请求


// 创建路由
// 其实是不同的请求方法：get、post、put等
// 参数是域名后的路径、当前路由的拦截器（其实是spring的Aop类似）、 请求回调函数，请求回调函数中的参数封装了请求和响应的全部信息
app.get('/home', checkCodeMiddleware, (request, response) => {

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

// 使用 :参数名称 在url在占位，接收占位传递的参数
// checkCodeMiddleware是当前路由的拦截器
app.get('/order/:id', checkCodeMiddleware, (request, response) => {
    console.log("获取请求url中id占位的路径参数是", request.params.id)

    response.send('hello express')
})


// jsonParser是当前路由的拦截器，是bodyParser包解析请求body的拦截器，拦截器处理后request上就多了body属性
app.post('/test',jsonParser, (request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')

    console.log('请求body', request.body)

    // 返回响应，注意如果是返回中文需要在响应的content-type中设置utf-8
    response.send("你好啊")
})

// all函数代表该路由所有的http请求方式都生效：get、post、put等
// 如果第一参数路径写为 通配符 * 表示匹配域名后所有的路径
app.all('/all', (request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.send('/all 接收所有的请求方式: get、post、put等')
})




// 监听端口，并启动服务
app.listen(9000, () => {
    console.log('服务已经启动并且占用了9000端口')
})

// powershell和cmd的curl命令替换为curl.exe
// git Bash 可以使用curl

// /home 发起Get请求，添加参数code=521可以请求成功，否则暗号错误
// curl  "http://127.0.0.1:9000/home?code=521"

// /order/:id 发起Get请求携带路径参数
// curl  "http://127.0.0.1:9000/order/12345?code=521"

// /test 发起Post请求
// curl -H "Content-Type: application/json" -X POST -d'{"user":"123","age":"18"}' "http://127.0.0.1:9000/test"


// /all 发起Get请求
// curl "http://127.0.0.1:9000/all"

// /all 发起Post请求
// curl -H “Content-Type: application/json” -X POST -d'{}' "http://127.0.0.1:9000/all"