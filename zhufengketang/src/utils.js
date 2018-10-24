export function loadMore(element,callback) {
    // 如果当前盒子的高度+ 滚动条卷起的高度+10> 盒子总高度那么重新发送请求；获取最新的数据；
    setTimeout(()=>{
        let scrollTop = element.scrollTop;
        let clientH = element.clientHeight;
        let scrollH = element.scrollHeight;
        if(scrollTop+clientH+10>scrollH){
            callback();
        }
    },200);
}

export function downRefresh(element,callback) {
    // 给元素绑定scroll事件；当元素的滚动条发生卷去时，执行对应的函数；
    element.addEventListener("scroll",()=>{
        let scrollTop = element.scrollTop;
        let clientH = element.clientHeight;
        let scrollH = element.scrollHeight;
        if(scrollTop+clientH+10>scrollH){
            callback();
        }
    })

}
