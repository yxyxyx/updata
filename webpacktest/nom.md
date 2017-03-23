首先要安装node.js并且自带npm软件管理包
用npm全局安装webpack
$ npm install webpack -g


打包文件步骤
1.新建文件里面包括index.html和test.js
2.输入命令行npm init生成webpack.json文件
3.安装依赖 npm insatll webpack --save-dev

简单的应用列子
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>webpack</title>
</head>
<body>
	<script type="text/javascript" src="./bundle.js"></script>
</body>
</html>

<!-- js文件代码 -->
document.write('It work');

在命令行中输入 webpack test.js bundle.js


页面中就会出现It work;