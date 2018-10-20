// npm  install react-router-dom --save;
// \
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,Route,Redirect,Switch} from "react-router-dom";
// HashRouter,Route : 这都是一个组件；
// HashRouter: 用来显示组件的
// Route : 用来配置路径和对应的组件的；Route有个path属性可以配置路径；component 是用来配置组件的；
// HashRouter 不会被解析出一个标签来；所以所有的Route需要在外面加一个嵌套的标签；
let Home = ()=>(<div>首页</div>);
let Profile = ()=>(<div>个人中心</div>);
let User = ()=>(<div>用户</div>);
ReactDOM.render(
    <HashRouter>
        <div>
            {/*只有当hash是/时，才会显示对应的组件*/}
            {/*在路由进行匹配时，是从上到下进行一一匹配的；如果没有匹配到；*/}
            {/*switch 只能匹配一个组件；只要匹配成功，就不再向下进行匹配；*/}
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/user"  exact={true} component={User}/>
                {/*Redirect : 这个组件用于重定向; 必须有一个to属性；代表重新定向的路由；*/}
                <Redirect to="/user"/>
            </Switch>
        </div>
    </HashRouter>,
document.querySelector("#root"));
