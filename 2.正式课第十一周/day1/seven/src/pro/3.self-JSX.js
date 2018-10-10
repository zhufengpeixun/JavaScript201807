class Element {
    constructor(type,attr,children){
        // this--> 实例；将属性放到当前的实例上；
        this.type = type;
        this.attr = attr;
        this.children = children;
    }
    render(){
        // 这个方法才是真正将虚拟的DOM转换成真实的DOM；
        // 创建真实的DOM
        // this ---> 实例；
        let  ele = document.createElement(this.type);
        for(let key in this.attr){
            // 循环行间属性这个对象；设置行间属性；
            if(key ==="className"){
                ele.setAttribute("class",this.attr[key]);
                continue;
            }
            if(key ==="htmlFor"){
                ele.setAttribute("for",this.attr[key]);
                continue;
            }
            ele.setAttribute(key,this.attr[key]);
        }
        this.children.forEach((item)=>{
            // 怎么判断是一个文本还是一个虚拟的DOM元素呢
            // 如果是一个虚拟的DOM元素的话，需要进行递归处理，把他转成真实的DOM；
            let newEle = item instanceof Element?item.render():document.createTextNode(item);
            ele.appendChild(newEle);
        });
        return ele;
    }
}
let react = {
    createElement(type,attr,...children){
        return  new Element(type,attr,children)// 对象
    }
}

let  reactDOM = {
    // element  : 就是一个普通的对象；
    // render : 把虚拟DOM渲染真实的DOM，并且
    render(element,container){
        // element : 虚拟的DOM元素；
        container.appendChild(element.render());
    }
}
let ele = react.createElement("div",{a:1},123789,react.createElement("p",null,"wowowo"));
reactDOM.render(ele,window.root);