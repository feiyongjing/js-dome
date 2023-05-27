var express = require('express');

// lowdb安装npm i lowdb@1.0.0   lowdb是直接将数据以json存放在文件中
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

// 数据存放文件 
const adapter = new FileSync(__dirname + '/../data/db.json')
// 获取db对象
const db = low(adapter)

// shordid安装npm i shortid   shortid是用于生产数据的ID属性
const shortid = require('shortid')

// 创建路由对象
var router = express.Router();

// 账本记录页面
router.get('/account', (req, res) => {
  let accounts = db.get('accounts').value()

  res.render('list', {accounts});
});

// 添加账单页面
router.get('/account/create', (req, res) => {
  res.render('create');
});

// 新增记录
router.post('/account', (req, res) => {
  let id = shortid.generate()
  // 数据存入文件
  db.get('accounts').unshift({ id, ...req.body }).write()
  res.render('success', { msg: '添加成功', url: '/account' });
});


// 新增记录
router.get('/account/:id', (req, res) => {
  let id = req.params.id
  // 数据存入文件
  db.get('accounts').remove({ id }).write()
  res.render('success', { msg: '删除', url: '/account' });
});

module.exports = router;
