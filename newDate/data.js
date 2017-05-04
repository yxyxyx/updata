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



// 转化标准格式的时候由于ios不能识别除标准格式时间未的其他模式（例如2014-05-24 12:00）
//故采用其他方法将其转化成标准格式然后再进行其他转化
function stringToJsTime(timeString) {
	var y = timeString.substring(0,4);
    var m = timeString.substring(5,7)-1;
    var d = timeString.substring(8,10);
    var h = timeString.substring(11,13);
    var mm = timeString.substring(14,16);      
    var ss = timeString.substring(17,19);      
    var time = new Date(y,m,d,h,mm,ss,0);      
    return time;      
}