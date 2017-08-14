/**
 * Created by Administrator on 2017/7/14 0014.
 */
var express = require('express');
var router = express.Router();
var Category = require('../models/Category');
var Content = require('../models/Content');
//通用的数据
var data;
router.use(function(req,res,next){
    data = {
        userInfo:req.userInfo,
        categories:[]
    }
    Category.find().then(function(categories){
        data.categories = categories;
        next();
    })
})
router.get('/',function(req,res,next){
    data.category = req.query.category || '';
    data.count = 0;
    data.page = Number(req.query.page || 1);
    data.limit = 3;
    data.pages = 0;
    var where = {};
    if(data.category){
        where.category = data.category;
    }
    // 读取所有的分类信息
    Content.where(where).count().then(function(count){
        data.count = count;
        // 计算总页数
        data.pages = Math.ceil(data.count / data.limit);
        data.page = Math.min(data.page, data.pages);
        data.page = Math.max(data.page, 1);
        var skip = (data.page - 1)*data.limit;
        return Content.where(where).find().limit(data.limit).skip(skip).populate(['category','user']).sort({addTime:-1})
    }).then(function(contents){
        data.contents = contents;
        res.render('main/index',data);
    });
})
router.get('/view',function(req,res){
    var contentid = req.query.contentid || '';
    Content.findOne({
        _id:contentid
    }).then(function(content){
        data.content = content;
        content.views++;
        content.save();
        res.render('main/view',data)
    })
})
module.exports = router;