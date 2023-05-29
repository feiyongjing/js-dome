var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/web/index');
var accountRouter = require('./routes/api/account');
var authRouter = require('./routes/web/auth');


// 安装session包，session会存放在内存中 npm i express-session
const session = require('express-session');
// 安装connect-mongo包，配置好mongoDB的连接后自动存储和取出内存中的session放入mongoDB npm i connect-mongo
const MongoStore = require('connect-mongo');

// 导入数据库配置文件数据
const {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE
} = require('./connection/config/config');


var app = express();

// 注意设置session的本质是拦截器，所以要在最前面，否则写入session失败
app.use(session({
  name: 'sid', //设置cookie的name，默认值是：connect.sid
  secret: 'axasd', // 参与加密的字符串（又称签名、加盐）
  saveUninitialized: false, //是否为每次请求都设置一个cookie用于存储session的id
  resave:true,  // 是否每次请求时都重新保持session
  store:MongoStore.create({
    mongoUrl: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`
  }),  // 配置好mongoDB的连接后自动存储和取出内存中的session放入mongoDB
  cookie:{
    httpOnly: true, //是否进制前端通过js操作cookie
    maxAge: 1000*60*60*4  // 设置sessionID的过期时间
  }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/api', accountRouter);
app.use('/',authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('404')
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
