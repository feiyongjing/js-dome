// 创建http服务端服务需要提前导入http模块，使用require导入模块
const http = require('http')
// 引入url模块解析url路径和表单参数
const url = require('url')

// 创建服务对象，参数是函数用于处理请求，函数的参数request和response分别是请求和响应的封装对象
const server = http.createServer((request, response) => {
    // 解析request.url，第二参数是是否将表单参数转换为对象保存在返回的结果query属性中
    let res=url.parse(request.url,true)

    console.log("解析的url路径是：",res.pathname)
    console.log("解析的表单参数是：",res.query)
    console.log("解析的表单参数keyword值是",res.query.keyword)


    response.setHeader('content-type', 'text/html;charset=utf-8')
    // 返回响应，注意如果是返回中文需要在响应的content-type中设置utf-8
    response.end("你好啊")

})

// 服务监听端口，并启动服务
server.listen(9000, () => {
    console.log('服务已经启动并且占用了9000端口')
})

// 发起请求
// curl "http://127.0.0.1:9000/test?keyword=99"