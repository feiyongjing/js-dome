// 创建http服务端服务需要提前导入http模块，使用require导入模块
const http = require('http')

// 创建服务对象，参数是函数用于处理请求，函数的参数request和response分别是请求和响应的封装对象
// 在没有配置请求路径的时候，所以的请求都会执行这个回调函数返回一样的结果
const server=http.createServer((request,response)=>{


    console.log("获取请求的方法",request.method)
    console.log("获取请求的url,url只包含路径和字符串不包含ip域名端口",request.url)
    console.log("获取请求的http协议版本",request.httpVersion)
    console.log("获取请求的请求头",request.headers)


    response.setHeader('content-type','text/html;charset=utf-8')
    // 获取请求body
    let body=''
    // 绑定data事件从request读取body数据
    request.on('data',chunk=>{
        body +=chunk
    })

    // 绑定end事件，结束时触发回调函数
    request.on('end',(chunk)=>{
        console.log('请求body',body)

        // 返回响应，注意如果是返回中文需要在响应的content-type中设置utf-8
        response.end("你好啊")
    })
})

// 服务监听端口，并启动服务
server.listen(9000,()=>{
    console.log('服务已经启动并且占用了9000端口')
})

// powershell和cmd的curl命令替换为curl.exe 
// git Bash 可以使用curl

// 发起请求
// curl -H 'Content-Type: application/json' -X POST -d'{"user":"123","age":"18"}' "http://127.0.0.1:9000/test"