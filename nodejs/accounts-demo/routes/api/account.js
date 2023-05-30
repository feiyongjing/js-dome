const express = require('express');

// 字符串转时间包 安装 npm i moment
const moment = require('moment')

// 拦截器校验token
const checkTokenMiddleware=require('../../middlewares/checkTokenMiddleware')

const db = require('../../connection/db/db');
const AccountsModel = require('../../connection/model/AccountsModel');

// 创建路由对象
const router = express.Router();



// 账本记录
router.get('/account',checkTokenMiddleware, (req, res) => {

    AccountsModel.find({username:req.user.username})
        .then((accounts) => {
            res.json({ code: '0000', msg: "查询账单列表成功", data: { accounts } })
        })
        .catch((err) => {
            res.json({ code: '1001', msg: "查询账单列表失败", data: null })
        })

});


// 新增记录
router.post('/account',checkTokenMiddleware, (req, res) => {

    AccountsModel
        .create({ ...req.body, time: moment(req.body.time).toDate() ,username:req.user.username})
        .then((data) => {
            res.json({ code: '0000', msg: "添加账单成功", data })
        })
        .catch((err) => {
            res.json({ code: '1001', msg: "添加账单失败", data: null })
        })

});


// 删除记录
router.delete('/account/:id',checkTokenMiddleware, (req, res) => {
    let id = req.params.id

    AccountsModel
        .deleteOne({ id, username:req.user.username})
        .then((data) => {
            res.json({ code: '0000', msg: "删除账单成功", data: {} })
        })
        .catch((err) => {
            res.json({ code: '1001', msg: "删除账单失败", data: null })
        })
});


// 获取单条账单信息
router.get('/account/:id',checkTokenMiddleware, (req, res) => {
    let id = req.params.id

    AccountsModel.findOne({id,username:req.user.username})
        .then((accounts) => {
            res.json({ code: '0000', msg: "查询账单详情成功", data: { accounts } })
        })
        .catch((err) => {
            res.json({ code: '1001', msg: "查询账单详情失败", data: null })
        })
});


// 更新单条账单信息
router.patch('/account/:id',checkTokenMiddleware, (req, res) => {
    let id = req.params.id

    AccountsModel.updateOne({id,username:req.user.username}, {...req.body})
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
