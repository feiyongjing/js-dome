//2. 导入 mongoose
const mongoose = require('mongoose');

//5. 创建文档的结构对象
//设置集合中文档的属性以及属性值的类型
let BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // 表示文档中该属性是必填项
        unique: true    // 表示文档中该属性的值是唯一的，但是注意只有当前集合文档中该属性没有重复数据时才生效，否则需要清除重复数据后才生效
    },
    author: String,
    price: Number,
    is_hot: Boolean
});

//6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
// 第一参数是集合名称，集合不存在会创建，注意如果这里的集合名称是book单数形式，但是mongoose实际会创建复数的books集合
// 第二参数是文档的结构
let BookModel = mongoose.model('novel', BookSchema);

module.exports=BookModel