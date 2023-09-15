const http = require('http');
const url = require("url");

var server = http.createServer(function(req,res){
    // var Obj = url.parse(req.url,true);//把url变成一个Object
//  得到查询部分，由于上面写了true，那么就是一个对象。
    // var queryObj = Obj.query;
    // 得到了查询部分，由于写了true，那么就是一个对象
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
    res.end("服务器收到了表单请求"+name+age+sex);
})
server.listen(3000,"127.0.0.1");
