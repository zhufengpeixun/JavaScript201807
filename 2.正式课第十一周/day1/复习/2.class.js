// es6 定义类的；
class  Fn {
    constructor(){
        // constructor 中的都是私有的属性
        let a = 99;
        // 所有跟this相关的，才跟实例有关；
        this.x = 100;
        this.y =10;
    }
    getX(){
        // 是原型上的方法；不是一个箭头函数；
    }
    // 如果使用webpack可以将下面的定义编译正常的es5;现在浏览器是不支持；
   /* getY=()=>{
        // 这是一个箭头函数在原型上的写法；
    }*/
    //
    //static a ={}
}
// 函数三种角色： 普通函数  构造函数  对象；

let f = new Fn;
console.log(f);//{x:100,y:10}


// 继承
class  A  extends Fn{
    constructor(){
        // 继承了类Fn的私有属性；
        // 不仅继承私有，还继承公有；
        super();
    }
}
let a = new A;
a.getX();
