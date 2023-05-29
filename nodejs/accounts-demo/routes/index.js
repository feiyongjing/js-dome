var express = require('express');

// 字符串转时间包 安装 npm i moment
var moment = require('moment')

const db = require('../connection/db/db');
const AccountsModel = require('../connection/model/AccountsModel');

// 创建路由对象
var router = express.Router();

// 账本记录页面
router.get('/account', (req, res) => {

  AccountsModel.find()
    .then((accounts) => {
      console.log("批量查询成功，批量查询的数据是", accounts)
      res.render('list', { accounts, moment });
    })
    .catch((err) => {
      console.log("批量查询出错", err)
      res.status(500).send("查询账单失败")
    })

});

// 添加账单页面
router.get('/account/create', (req, res) => {
  res.render('create');
});

// 新增记录
router.post('/account', (req, res) => {

  AccountsModel
    .create({ ...req.body, time: moment(req.body.time).toDate() })
    .then((data) => {
      console.log("插入成功，插入的数据是；", data)
      res.render('success', { msg: '添加成功', url: '/account' });
    })
    .catch((err) => {
      console.log("插入数据出错", err)
      res.status(500).send("添加账单失败")
    })

});


// 删除记录
router.get('/account/:id', (req, res) => {
  let id = req.params.id

  AccountsModel
    .deleteOne({ id })
    .then((data) => {
      console.log("删除成功，影响的数据条数是", data.deletedCount)
      res.render('success', { msg: '删除', url: '/account' });
    })
    .catch((err) => {
      console.log("删除数据出错", err)
      res.status(500).send("删除账单失败")
    })
});

module.exports = router;
