var express = require('express');

// 字符串转时间包 安装 npm i moment
var moment = require('moment')

const db = require('../../connection/db/db');
const AccountsModel = require('../../connection/model/AccountsModel');

// 创建路由对象
var router = express.Router();

// 账本记录页面
router.get('/account', (req, res) => {

    AccountsModel.find()
        .then((accounts) => {
            //   res.render('list', { accounts, moment });
            res.json({ code: '0000', msg: "查询账单列表成功", data: { accounts } })
        })
        .catch((err) => {
            //   res.status(500).send("查询账单失败")
            res.json({ code: '1001', msg: "查询账单列表失败", data: null })
        })

});


// 新增记录
router.post('/account', (req, res) => {

    AccountsModel
        .create({ ...req.body, time: moment(req.body.time).toDate() })
        .then((data) => {
            //   res.render('success', { msg: '添加成功', url: '/account' });
            res.json({ code: '0000', msg: "添加账单成功", data })
        })
        .catch((err) => {
            //   res.status(500).send("添加账单失败")
            res.json({ code: '1001', msg: "添加账单失败", data: null })
        })

});


// 删除记录
router.delete('/account/:id', (req, res) => {
    let id = req.params.id

    AccountsModel
        .deleteOne({ id })
        .then((data) => {
            //   res.render('success', { msg: '删除', url: '/account' });
            res.json({ code: '0000', msg: "删除账单成功", data: {} })
        })
        .catch((err) => {
            //   res.status(500).send("删除账单失败")
            res.json({ code: '1001', msg: "删除账单失败", data: null })
        })
});


// 获取单条账单信息
router.get('/account/:id', (req, res) => {
    let id = req.params.id

    AccountsModel.findById(id)
        .then((accounts) => {
            res.json({ code: '0000', msg: "查询账单详情成功", data: { accounts } })
        })
        .catch((err) => {
            res.json({ code: '1001', msg: "查询账单详情失败", data: null })
        })
});


// 更新单条账单信息
router.patch('/account/:id', (req, res) => {
    let id = req.params.id

    AccountsModel.updateOne(id, res.body)
        .then((accounts) => {
            AccountsModel.findById(id)
            .then((accounts) => {
                res.json({ code: '0000', msg: "编辑账单详情成功", data: { accounts } })
            })
            .catch((err) => {
                res.json({ code: '1001', msg: "查询账单详情失败", data: null })
            })
        })
        .catch((err) => {
            res.json({ code: '1001', msg: "编辑账单详情失败", data: null })
        })
});

module.exports = router;
