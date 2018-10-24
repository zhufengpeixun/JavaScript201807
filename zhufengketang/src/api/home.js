import {get} from "./index.js";
// 获取轮播图数据；
export function getSliders() {
    return get("/getSliders")
}
export function getLesson(category,offset,limit){
    // category :代表的是课程类型
    // offset : 页面已经加载多少条
    // limit : 限制加载多少次；
    return  get(`/getLessons/${category}?offset=${offset}&limit=${limit}`);
}