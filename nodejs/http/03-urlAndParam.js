// 创建http服务端服务需要提前导入http模块，使用require导入模块
const http = require('http')
const fs = require('fs')
// 引入路径模块
const path = require('path')

// 创建服务对象，参数是函数用于处理请求，函数的参数request和response分别是请求和响应的封装对象
const server = http.createServer((request, response) => {
    // 解析request.url，第二参数是是否将表单参数转换为对象保存在返回的结果query属性中
    let res = new URL(request.url, 'http://127.0.0.1')

    console.log(res)
    console.log("解析的url路径是：", res.pathname)
    console.log("解析的表单参数是：", res.searchParams)
    console.log("解析的表单参数keyword值是", res.searchParams.get('keyword'))


    response.statusCode = 200
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.setHeader('test', ['a', 'b', 'c'])


    console.log("后缀是",path.extname(res.pathname))
    let data
    // 根据路径判断是否是前端资源，是就去对应的路径下获取数据，
    // 注意虽然浏览器有判断资源类型，但是不同的资源响应的content-type还是需要设置避免出现比较特殊的情况
    // css和js代码出现中文不会影响浏览器的渲染出现问题，但是html资源响应的content-type设置变化会影响
    if (['.html', '.css', '.js', '.ico', '.png', '.mp3', '.mp4'].indexOf(path.extname(res.pathname)) !==-1) {
        data = fs.readFileSync(path.resolve(__dirname, 'static' + res.pathname))
    } else {
        // 不是就去后端获取数据，如果后端也取不到就应该是404
        data = '你好啊'
    }

    // 设置响应体，一般write或者是end中只设置其中一个，否则都设置会全部返回
    // 注意如果是返回中文需要在响应的content-type中设置utf-8
    // response.write("哈哈")

    // 设置响应体返回响应
    // end会结束请求连接，必须有一个end执行，并且只有第一个生效，如果不调用end是不会断开连接返回结果的，导致资源一直被占用
    response.end(data)


})

// 服务监听端口，并启动服务
server.listen(9000, () => {
    console.log('服务已经启动并且占用了9000端口')
})

// powershell和cmd的curl命令替换为curl.exe 
// git Bash 可以使用curl

// 发起请求
// curl "http://127.0.0.1:9000/html/index.html"