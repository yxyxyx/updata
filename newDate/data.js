// 因为时间格式的转化在不同的浏览器上转化的结果不同，所以最好用拼接的方法
// 将Date时间格式转化为'2014-03-22 12:20:10';
function getLocalTime(now) { 
    var year=now.getFullYear(); 
    var month=now.getMonth()+1; 
    var date=now.getDate(); 
    var hour=now.getHours(); 
	var minute=now.getMinutes(); 
	var second=(now.getSeconds() < 10)?'0'+now.getSeconds():now.getSeconds(); 
	return year+"-"+month+"-"+date+" "+hour+":"+minute; 
}
// 标准时间格式转化成时间戳的方法
Date.parse()   

var time = new Date();
time = Date.parse(time);   // 将当前时间转化为时间戳
// 时间戳可进行加减后再转化为标准时间格式
var time2 = new Date(time);
// 之后可调用getLocalTime()方法将其转化成'2014-03-22 12:20:10'格式