let http = require('http');
let fs = require('fs');
let url = require('url'); // 专门处理路径的模块

// 读取文件
function read(cb){
    fs.readFile('./list.json', 'utf-8', (err, data) => {
        // console.log(typeof data);
        cb && cb(err,data)
    })
}
//写入文件
function write(ary,cb){
    fs.writeFile('./list.json', JSON.stringify(ary), 'utf-8', (err) => {
        // 写入成功才算是真正的成功
        /* if (!err) {
            //obj中的 errorCode 就是 0；0对于前台就是代表成功态
            res.end(JSON.stringify(obj))
        } */
        cb(err)
    })
}



http.createServer((req,res)=>{
    // let path = './list.json';
    let obj = {errorCode:0};//返回给前台的 数据对象
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin',"*");
    //允許前端跨域請求

    //使用url  获取路径 和 参数
    // 第二参数 true  是把 query从 字符串  转成 对象
    // console.log(url.parse(req.url));
    //  query中存储的是 前台传进来的url参数
    let {pathname,query} = url.parse(req.url,true);
    switch (pathname) {
        case '/list': // 请求列表的接口
            read((err,data)=>{
                if (!err) {
                    obj.data = JSON.parse(data);
                    res.end(JSON.stringify(obj)); //end(字符串) 
                } else {
                    obj.errorCode = 1;
                    res.end(JSON.stringify(obj))
                }
            })
            break;
        case '/remove': // 删除数据对应ID的那一项数据
            // 先 拿到 文件中的数据； 再循环 数据； 从中删除对应ID的那一项；
            // 再把 修改后的数据写入 文件
            read((err,data)=>{
                if(!err){
                    let ary = JSON.parse(data);// 把字符串转成 数组
                    console.log(query);
                    ary = ary.filter((item)=>{
                        return item.id != query.id;
                        // 不能用 绝对不相等；
                        //通过这个筛选  ary中放的都是id不等于query.id 的项
                    });
                    console.log(ary);
                    write(ary,(err)=>{
                        // 写入成功才算是真正的成功
                        if (!err) {
                            //obj中的 errorCode 就是 0；0对于前台就是代表成功态
                            res.end(JSON.stringify(obj))
                        }else{
                            obj.errorCode = 1;
                            res.end(JSON.stringify(obj));
                        }
                    })
                }
            })
        default:
            break;
    }
    
}).listen(8001,()=>{
    console.log("端口8001已经启用")
})