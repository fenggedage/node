    var http = require('http');
const url = require('url');

var server = http.createServer(function(req,res){
    // url.parse()可以将一个完整URL的地址分为很多部分
    // host、post、pathname、path、query
    // console.log(req.url);
    // var url = req.url();
    var pathname = url.parse(req.url).pathname;
    // url.parse()如果第二个参数是true，那么就可以将所有的查询变为对象
    // 就可以直接打点得到这个参数
    var query = url.parse(req.url,true).query;//query指的是查询部分   加个true就 变成了Object
     // 就可以直接打点得到这个参数
    var sex = query.sex;
    console.log("pathname==="+pathname);///assd/1.html 
    // console.log("query==="+query);//id=12345&sex=man
    console.log(query);//加个true就变成乐一个对象
    console.log("sex"+sex);
    res.end();
});
server.listen(3000,"127.0.0.1")

// querystring.parse 接收一个查询字符串 返回一个查询对象