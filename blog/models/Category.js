/**
 * Created by Administrator on 2017/7/29 0029.
 */
var mongoose = require('mongoose');
var categoriesSchema = require('../schemas/categories');
module.exports = mongoose.model('Category', categoriesSchema);