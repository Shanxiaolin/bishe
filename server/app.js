var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index')
var teacherRouter = require('./routes/teacher');
var studentRouter = require('./routes/student');
var worktestRouter = require('./routes/worktest');
var adminRouter = require('./routes/admin');
var labRouter = require('./routes/lab');
var bodyParser = require('body-parser')

var app = express();

var url="http://localhost:8081,http://121.199.25.244"

// 设置跨域访问
app.all('*', function (req, response, next) {
  let ol = url.split(",")
  if (ol.indexOf(req.headers.origin)>= 0) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    response.header("Access-Control-Allow-Origin", req.headers.origin);
    //设置header里边的字段，必须包含下面的两种
    response.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    //跨域允许的请求方式
    response.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    //设置响应头信息
    response.header("Content-Type", "application/json");
  }
  next();
});


// 设置viewsu文件夹为存放视图文件的目录，即存放模板文件的地方;__dirname为全局变量，存储当前正在执行的脚本所在的目录
app.set('views', path.join(__dirname, 'views'));
// 设置试图模板引擎为jade
app.set('view engine', 'jade');

// 加载日志中间件
app.use(logger('dev'));
// 加载解析json中间件
app.use(express.json());
// 加载解析urlencoded请求体的中间件。
app.use(express.urlencoded({
  extended: false
}));
// 加载解析cookie的中间件。
app.use(cookieParser());
// 设置public文件为存放静态文件的目录。
app.use(express.static(path.join(__dirname, 'public')));

// 注册路由。
app.use(indexRouter);
app.use(teacherRouter);
app.use(studentRouter);
app.use(worktestRouter);
app.use(adminRouter);
app.use(labRouter);

app.use(bodyParser.json())
// 由于err没有404错误提示，所以需要单独设计一个模块
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;