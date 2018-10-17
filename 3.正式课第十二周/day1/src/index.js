import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/1.Counter"
import Todo from "./component/2.Todo"
ReactDOM.render(
<div>
    <Counter/>
    <Todo/>
</div>,
document.querySelector("#root")
)
;