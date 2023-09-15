const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req,res){
    // 存储所有的文件夹
    var Folder = [];
    // 读取目录
    fs.readdir("./aaa",function(err,files){
        // files是个文件名的数组，并不是文件的数组 表示./aaa这个文件夹中的所有东西
        // 包括 文件、文件夹
        // console.log(files);
        for(var i=0;i<files.length;i++){
            var thefiles = files[i];
            // console.log(thefiles);
            // 进行一次检测  检测里面的文件
            fs.stat("./aaa/"+thefiles,function(err,stats){
                // 如果它是一个文件夹那么输出它
                if(stats.isDirectory()){//判断是否是文件件 是文件夹的话就把thefiles放进Folder里
                    Folder.push(thefiles)
                }
                console.log(Folder);
            })
        }
        // console.log(Folder);//因为是异步的 所以会先执行这个再执行上面
    })
})

server.listen(3000,"127.0.0.1");

//  readdir()方法-->读取目录
// 读取文件状态；fs.stat()方法；
// isDirectory()是检查一个对象是否是文件夹