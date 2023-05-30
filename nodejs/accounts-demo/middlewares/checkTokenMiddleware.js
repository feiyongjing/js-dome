// 使用jwt 安装 npm i jsonwebtoken
const jwt = require('jsonwebtoken')


// 导入token加密的盐
const {secret} = require('../connection/config/config');

let checkTokenMiddleware=(req,res,next)=>{
    let token =req.get('token')
    if(!token){
        return res.json({code:'2003',msg:'token缺失',data:null})
    }

    // 校验token
    jwt.verify(token,secret,(err,data)=>{
        if(err){
            res.json({code:'2004',msg:'token校验失败',data:null})
            return
        }
        // console.log(data)
        // 保存用户信息到请求中，以便于后续使用
        req.user=data
        // 校验成功
        next()
    })
}

module.exports=checkTokenMiddleware