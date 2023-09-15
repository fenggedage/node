
// 统计开始的main到结束的main打印得时间
// console.time('main');//代码计时器
// 不断地循环阻塞了代码的执行
// for(var i=0;i<100000;i++){

// };
// 执行代码的机器在这个地方一直不停地执行 然后就没有办法执行下面的代码 一直等它忙完了才执行下面的代码  ---这种事阻塞式的

// setTimeout(()=>{
//     for(var i = 0;i<10000;i++){}
//     console.log('循环玩了');
// },0)

// console.timeEnd('main');
// console.log('执行完了');

// I/O就是输入和输出

// console.log('main');

// 耗费时间(阻塞情况) 假设这个要1000ms后才能下载后 下面的代码要1000ms后才能执行 
// var data = get('http://www.baidu.com/1.jpg');





// console.log('main');

// get('http:www.baidu.com/1.jpg',function(data){//这是个异步的操作

// });




// 1.如果函数需要回调参数，一定是在参数的最后出现
// function getFileAsync(path,callback){

// }
// 2.错误优先的回调函数