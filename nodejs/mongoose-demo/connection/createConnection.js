const db = require('./db/db');
const BookModel = require('./model/BookModel');
//导入 mongoose
const mongoose = require('mongoose');

db(() => {

    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        type: '名著',
        price: 19.9
    }).then((res) => {
        console.log("插入成功，插入的数据是；", res)
        //4.关闭数据连接 项目运行过程中不会添加该代码
        mongoose.disconnect();
    }).catch((err) => {
        console.log("插入数据出错", err)
    })
})



