var express = require('express');

// 注意安装依赖npm i formidable
// formidable是用于接收请求携带的文件
var formidable = require('formidable');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 文件上传文件模板返回
router.post('/portrait', (req, res) => {
  res.render('portrait', { title: 'Express' });
});

// curl "http://127.0.0.1:3000/portrait"

// 上传文件
router.post('/portrait', (req, res) => {

  // 创建表单对象
  const form = formidable({
    multiples: true,
    // 设置上传文件的保存位置
    uploadDir: __dirname + '/../public/images',
    // 保持文件的后缀
    keepExtensions: true
  })

  // 解析请求，fields存放了json参数，files存放了上传的文件
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
      return;
    }
    res.json({ fields, files })
  })

  let url = '/images/' + files.portrait.newFilename;
  res, send(url)
});

module.exports = router;
