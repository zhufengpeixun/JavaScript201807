import {post} from "./index";
export function login(user) {
    return post("/login",user)
}
export function register(user) {
    return post("/reg",user)
}