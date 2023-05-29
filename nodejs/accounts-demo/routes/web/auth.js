var express = require('express');

// 加密算法包 安装 npm i md5
var md5 = require('md5')

const session = require('express-session');

const db = require('../../connection/db/db');
const UserModel = require('../../connection/model/UserModel');

// 创建路由对象
var router = express.Router();

// 注册页面
router.get('/reg', (req, res) => {
  res.render("auth/reg")
});

// 注册接口
router.post('/reg', (req, res) => {

  UserModel.create({ ...req.body, password: md5(req.body.password) })
    .then((data) => {
      // res.json({ code: '0000', msg: "注册成功", data })
      res.render("success", { msg: '注册成功', url: '/login' })
    })
    .catch(() => {
      // res.json({ code: '1001', msg: "注册失败", data: null })
      res.status(500).send("注册失败")
    })


});


// 登录页面
router.get('/login', (req, res) => {
  res.render("auth/login")
});

// 登录接口
router.post('/login', (req, res) => {

  UserModel.findOne({ username: req.body.username, password: md5(req.body.password) })
    .then((data) => {
      console.log(data)

      req.session.username = data.username
      req.session._id = data._id

      res.render("success", { msg: '登录成功', url: '/account' })

    })
    .catch((err) => {
      // res.json({ code: '1001', msg: "注册失败", data: null })
      res.status(500).send("登录错误")
    })
});


// 退出登录
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.render("success", { msg: '退出成功', url: '/login' })
  })

});



module.exports = router;
