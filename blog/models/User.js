/**
 * Created by Administrator on 2017/7/14 0014.
 */
var mongoose = require('mongoose');
var usersSchema = require('../schemas/users');
module.exports = mongoose.model('User', usersSchema);