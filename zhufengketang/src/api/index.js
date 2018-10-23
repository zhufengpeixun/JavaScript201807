// ajax  axios  fetch (在低版本的IE一下是不支持的);

const HOST = "http://localhost:3001";
// fetch 返回一个promise的实例；
//获取数据；
export function get(url) {
    // response : 是一个响应的对象；里面有状态码；响应体；
    // response.json : 把响应体的数据返回出去；
    return fetch(HOST+url).then(response=>response.json())
}