/**
 * Created by Administrator on 2017/8/7 0007.
 */
var mongoose = require('mongoose');
var contentsSchema = require('../schemas/contents');
module.exports = mongoose.model('Content', contentsSchema);