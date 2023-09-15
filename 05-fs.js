const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req,res){
    // console.log(req.ip);
    // 不处理小图标
    // if(req.url == "/favicon.ico"){
    //     return;
    // }
    // 给用户加一个五位数的ID
    const userid = parseInt(Math.random()*12345) + 10000;
    console.log("欢迎"+userid);
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
    // 读取文件
    // 两个参数;第一个是完整路径，当前目录写./
    // 第二个参数就是回调函数，表示文件读取成功之后做的事情
    fs.readFile("./b.html",{"charset":"utf-8"},function(err,data){//err=错误 data=数据
        if(err){//有错误就抛出错误
            throw err
        }
        // console.log(1);//这是个异步
        console.log(userid +"文件读取完毕");
        res.end(data);//返回数据
    });
    // console.log(2);  
});
server.listen(3000,"127.0.0.1");
// 事件环：一旦这个东西呗阻塞了它也不会阻塞后面的  但是计算的时候是不能的 例如for循环 计算不能异步的 