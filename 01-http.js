// 这个案例
// // 引用模块
// var http = require('http');

// // 创建一个服务器 回调函数表示接受到请求之后要做的事情
// var server = http.createServer(function(req,res){
//     // req参数表示请求，res表示响应
//     // console.log('服务器接收到了请求'+req.url);//收到/和/favicon.ico    第一个是网页根目录  第二个是根网页目录的图标
//     console.log('http://127.0.0.1:3000/');  
//     // 发送一个响应头  200状态码  字节类型  文本格式    编码格式 
//     res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
//     res.write("<h3>我是1</h3>");
//     res.write("<h3>我是2</h3>");
//     res.write("<h3>我是3</h3>");
//     res.write("<h3>我是4</h3>");
//     res.end('<h1>Success</h1>');
// });
// // 监听端口
// server.listen(3000,"127.0.0.1")

const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
    res.end();
}).listen(3000,"127.0.0.1");