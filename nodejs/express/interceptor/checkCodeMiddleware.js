// 导入express模块，这不是nodejs内置模块需要提前npm i express
const express = require('express');

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

module.exports=checkCodeMiddleware