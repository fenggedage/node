var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    // 不处理小图标
    // if(req.url == "/favicon.ico"){
    //     return;
    // }
    fs.stat("./aaa",function(err,data){
        // 检测这个路径是不是一个文件夹
        console.log(data.isDirectory());
    })


    // //在目录创建一个文件夹
    // fs.mkdir("./aaa",function(err,data){//必须有一个回调函数才行
    //     if(err){
    //         throw err
    //     }
    // });//异步创建文件夹


});
server.listen(3000,"127.0.0.1");
// 读取文件的状态；
// fs.stat(path,callback);