import {get} from "./index.js";
// 获取轮播图数据；
export function getSliders() {
    return get("/getSliders")
}