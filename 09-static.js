var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");


http.createServer(function(req,res){
    // 得到用户路径
    // var path = url.parse(req.url);//把url变成一个对象
    // 比如用户输入的是127.0.0.1/abc/1.html通过下面这句话直接拿到/abc/1.html
    // var pathname = path.pathname;//只要路径部分
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    // 默认首页
    if(pathname == "/"){
        pathname = "idnex.html"
    }
    // 拓展名  例如---.jpg
    var extname = path.extname(pathname);
    console.log(extname);

    // 读取这个文件
    fs.readFile("./static/"+pathname,function(err,data){
        if(err){
            console.log(1);
            // throw err;
            // 如果此文件不存在就应该用404返回
            fs.readFile("./static/err.html",function(err,data){
                res.writeHead(404,{"Content-type":"text/html;charset=utf8"});
                res.end(data);
            })
            return;//如果没有这个 就会一直到下面的res.end 结束
        }
        // MIME类型 就是    
        // 网页文件：text/html
        // jpg文件： images/jpg
        // res.writeHead(200,{"Content-type":"text/html"});
        var mime = getMime(extname)
        res.writeHead(200,{"Content-type":mime});
        res.end(data);
    })

}).listen(3000,"127.0.0.1");

function getMime(extname){
    switch(extname){
        case ".html" :
            return "text/html";
            break;
        case ".jpg" :
            return "image/jpg";
            break;  
        case ".css" :
            return "text/css";
            break;
    }
}