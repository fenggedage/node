var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    // 不处理小图标
    if(req.url == "/favicon.ico"){//因为小图标也会返回  要处理 否则会返回两次
        return;
    }
    // 遍历aaa里面的所有文件、文件夹
    fs.readdir("./aaa",function(err,files){
        // files是一个存放文件或文件夹名的数组
        // 存放文件或文件夹的数组
        var Folder = [];
        // 迭代器就是强行把异步的函数，变成同步的函数。
        // 1做完了再做2以此类推
        (function iterator(i){//这是个匿名函数 这个i是0  一上来就从这个数组中遍历第0项
            // 遍历结束
            if(i==files.length){
                console.log(Folder);
                return;//解决了超过文件数量的话一直的死循环
            }
            fs.stat("./aaa/"+files[i],function(err,stats){//
            //    检测成功之后做的事情
                if(stats.isDirectory()){//判断当前的文件是文件夹的话就把放进数组Folder里
                //    如果是文件夹那么放入数组 不是什么都不做
                    Folder.push(files[i])
                }
                iterator(i+1);//然后就往下一项遍历
            })//这样子就能强行把stat从异步变成同步 即这个stat先从0开始
        })(0)//0对应files数组的第0项  此时上面的i是0
    })
    res.end();
})
server.listen(3000,"127.0.0.1");

//  readdir()方法-->读取目录