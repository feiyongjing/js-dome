/**
 * 
 * @param {*} success 数据库连接成功的回调函数
 * @param {*} err 数据库连接失败的回调函数
 */
module.exports = function (success, err) {

    // 没有传递失败函数时的默认失败函数
    if (typeof err !== 'function') {
        err = () => console.log('连接失败');
    }

    //1. 安装mongoose进行连接MongoDB npm i mongoose
    //2. 导入 mongoose
    const mongoose = require('mongoose');

    // 导入数据库配置文件数据
    const {
        DB_HOST,
        DB_PORT,
        DB_USERNAME,
        DB_PASSWORD,
        DB_DATABASE
    } = require('../config/config');

    //设置 strictQuery 为 true
    mongoose.set('strictQuery', true);

    // 3.连接MongoDB数据库，
    // 注意连接url分别是协议类型、用户名、密码、ip、端口、数据库名称
    mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`);

    //4. 设置回调
    // 设置连接成功的回调  once 一次   事件回调函数只执行一次
    mongoose.connection.once('open', () => { success() })

    // 设置连接错误的回调
    mongoose.connection.on('error', () => {
        err()
    });

    //设置连接关闭的回调
    mongoose.connection.on('close', () => {
        console.log('连接关闭');
    });
}