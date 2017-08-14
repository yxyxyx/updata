/**
 * Created by Administrator on 2017/7/14 0014.
 * 应用程序的启动入口文件
 */
// 加载express模板
var express = require('express');
// 加载模板处理模板
var swig = require('swig');
// 加载数据库模块
var mongoose = require('mongoose');
// 加载body-parser，用来处理post提交过来的数据
var bodyParser = require('body-parser');
// 加载cookies模块
var Cookies = require('cookies');
// 创建app应用
var app = express();

var User = require('./models/User');
// 设置静态文件托管
// 当用户访问的url以/public开始，那么直接返回对应__dirname + '/public'下的文件
app.use('/public',express.static(__dirname + '/public'));
// 配置应用模板
// 定义当前文件使用的模板引擎
app.engine('html',swig.renderFile);
// 设置模板文件存放的目录
app.set('views','./views');
// 注册所使用的模板引擎，起一个参数必须是view engine，第二个参数必须和上面的html保持一致
app.set('view engine','html');
// 在开发过程中，需要取消模板缓存
swig.setDefaults({cache:false});
//bodyparse的设置
app.use(bodyParser.urlencoded({extended:true}));

// 设置cookies
app.use(function(req,res,next){
    req.cookies = new Cookies(req,res);
    // 解析用户登录的信息
    req.userInfo = {};
    if(req.cookies.get('userInfo')){
        try{
            req.userInfo = JSON.parse(req.cookies.get('userInfo'));

            // 获取当前登录用户的类型，是否是管理员
            User.findById(req.userInfo._id).then(function(userInfo){
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                next();
            })
        }catch(e){
            next();
        }
    }else{
        next();
    }

})
// 根据不同的功能划分模块
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

// 监听http请求
mongoose.connect('mongodb://localhost:27018/blog',function(err){
    if(err){
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
        app.listen(8081);
    }
});

