// 创建http服务端服务需要提前导入http模块，使用require导入模块
const http = require('http')

// 创建服务对象，参数是函数用于处理请求，函数的参数request和response分别是请求和响应的封装对象
const server=http.createServer((request,response)=>{
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('你好')  // 设置响应体，如果是中文需要添加http header设置contentType设置字符集utf-8和响应文件格式
})

// 服务监听端口，并启动服务
server.listen(9000,()=>{
    console.log('服务已经启动并且占用了9000端口')
})