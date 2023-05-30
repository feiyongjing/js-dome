var express = require('express');

// 加密算法包 安装 npm i md5
var md5 = require('md5')

// 使用jwt 安装 npm i jsonwebtoken
var jwt = require('jsonwebtoken')

// 导入token加密的盐
const {secret} = require('../../connection/config/config');

const UserModel = require('../../connection/model/UserModel');

// 创建路由对象
var router = express.Router();

// 登录接口
router.post('/login', (req, res) => {

  UserModel.findOne({ username: req.body.username, password: md5(req.body.password) })
    .then((data) => {
      console.log(data)

      // 创建token，参数是用户原数据、加密签名（盐）、配置(expiresIn是token的过期时间)
      let token = jwt.sign({ username: data.username, id: data._id }, secret, {
        expiresIn: 1000 * 60 * 5
      })
      res.json({ code: '2001', msg: "登录成功", data: { token } })
    })
    .catch((err) => {
      console.log(err)
      res.json({ code: '2002', msg: "用户名或密码错误", data: null })
    })
});


// 退出登录
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ code: '2003', msg: "退出登录成功", data: null })
  })

});



module.exports = router;
