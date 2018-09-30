let http = require('http');
let fs = require('fs');
http.createServer((req,res)=>{
    let path = './list.json';
    let obj = {errorCode:0};//返回给前台的 数据对象
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin',"*");
    //允許前端跨域請求
    fs.readFile(path,'utf-8',(err,data)=>{
        console.log(typeof data);
        if(!err){
            obj.data = JSON.parse(data);
            res.end(JSON.stringify(obj)); //end(字符串) 
        }else{
            obj.errorCode = 1; 
            res.end(JSON.stringify(obj))
        }
    })
}).listen(8001,()=>{
    console.log("端口8001已经启用")
})