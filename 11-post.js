const http = require("http");


// 创建服务器
var server = http.createServer(function(req,res){
    // 如果你的访问地址是这个，并且请求类型是post
    if(req.url == "/dopost" && req.method.toLocaleLowerCase() == "post"){
        var alldata = "";
        req.addListener("data",function(chunk){
            alldata += chunk;
            console.log(chunk);
        })
        req.addListener("end",function(){
            console.log(alldata.toString());
        })
    }
})
server.listen(80,"127.0.0.1");
