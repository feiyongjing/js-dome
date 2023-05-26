// 导入express模块，这不是nodejs内置模块需要提前npm i express
const express = require('express');


// 导入fs模块
const fs = require('fs');
const path = require('path');

const home = require('./routes/home');
const order = require('./routes/order');
const all = require('./routes/all');

// 创建应用对象
const app = express()

// 申明中间件函数
function recordMiddleware(request, response, next) {
    // 获取请求的ip和路径存放在access.log文件中
    fs.appendFileSync(path.resolve(__dirname, "access.log"), request.ip + request.path + '\r\n')
    // next如果不被调用则请求被拦截下来了
    next()
}

// 使用中间件函数做全局路由拦截器
// 注意use必须在所有的路由创建之前调用，否则全局路由拦截器失效
app.use(recordMiddleware)

// 添加全局拦截器做防盗链
// 判断请求图片是否有 referer 请求头并且值是127.0.0.1
app.use((request, response, next) => {

    if (['.jpg', '.ico', '.png'].indexOf(path.extname(request.path)) !== -1) {
        // 获取referer请求头
        let referer = request.get("referer")
        if (referer) {
            let res = new URL(referer)
            if (res.hostname !== '127.0.0.1') {
                response.send("请求的资源有防盗链，请确认请求头referer是127.0.0.1")
            } else {
                next()
            }
        } else {
            response.send("请求的资源有防盗链，请确认请求头referer是127.0.0.1")
        }
    } else {
        next()
    }
})


// 静态资源文件获取设置
app.use(express.static(__dirname + '/public'))
// powershell和cmd的curl命令替换为curl.exe
// git Bash 可以使用curl
// 以下url获取当前项目的静态资源
// curl  "http://127.0.0.1:9000/html/index.html"
// curl  "http://127.0.0.1:9000/img/favicon.ico"  有防盗链
// curl -H "referer: http://127.0.0.1" "http://127.0.0.1:9000/img/favicon.ico"  通过防盗链

// 如果前端的静态资源和后端的接口路径冲突了，那么哪边的代码先执行（代码自上而下）就哪边处理请求

// home路径的接口，第一个参数是路径前缀（也可以不设置），里面的每个接口都添加该前缀
app.use('/home',home)


// order路径的接口，第一个参数是路径前缀（也可以不设置），里面的每个接口都添加该前缀
app.use('/order',order)


// all路径的接口，第一个参数是路径前缀（也可以不设置），里面的每个接口都添加该前缀
app.use('/all', all)


// 监听端口，并启动服务
app.listen(9000, () => {
    console.log('服务已经启动并且占用了9000端口')
})

