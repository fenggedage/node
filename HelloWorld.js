// require表示引包，引包就是引用自己的一个特殊功能
var http = require('http');
const fs = require('fs');//读取文件
// ]创建服务器，参数是一个回调函数，表示如果有请求进来要做什么
var server = http.createServer(function(req,res){
    if(req.url=="/fang"){
        fs.readFile("./c.html",function(err,data){
            // console.log("http//localhost:1234");
         // req表示请求；request;res表示响应；respone
         // 设置HTTP头部，状态码是200，文件类型是html,字符集是utf8
         res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
         res.end(data);
     })
    }else if(req.url == '/yuan'){
        fs.readFile("./b.html",function(err,data){
            // console.log("http//localhost:1234");
         // req表示请求；request;res表示响应；respone
         // 设置HTTP头部，状态码是200，文件类型是html,字符集是utf8
         res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
         res.end(data);
     })
    }else if(req.url == '/0.jpg'){
        fs.readFile("./0.jpg",function(err,data){
            // console.log("http//localhost:1234");
         // req表示请求；request;res表示响应；respone
         // 设置HTTP头部，状态码是200，文件类型是html,字符集是utf8
         res.writeHead(200,{"Content-type":"image/jpg;charset=UTF-8"});
         res.end(data);
       })
    }else if(req.url == '/bbb.css'){//当请求bbb链接的时候
        fs.readFile("./aaa.css",function(err,data){//返回文件aaa的css文件内容
         res.writeHead(200,{"Content-type":"text/css"});
         res.end(data)
        })
    }else{
        res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
        res.end("访问错误");
    }
}); 
// 运行服务器 监听3000端口 (端口号可以任改  )
server.listen(3000,'127.0.0.1');