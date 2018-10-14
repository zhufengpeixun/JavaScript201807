// 父传子  props : 把行间属性打包成一个对象传给实例的props属性； this.props

// 子传父：父亲身上的定义改变自己状态方法，让儿子进行调用；让方法传给子组件；

// 状态是私有的；可以自己进行修改；属性是不可以修改的；react的单向数据流；
// 属性和状态发生改变会影响视图；

// 受控组件，非受控组件；一般针对于表单元素；如果当前的表单元素的value受状态控制；那么就是一个受控组件；
// 如果是受控组件，一定有onChange事件，输入框的value不能直接被修改，只能通过修改状态改变输入框的值；
// 获取元素：1. ref="a"   this.refs.a
//         2. ref={(x)=>{this.a = x}}
// 生命周期：
// 初始化实例
// defaultProps===> constructor ===> componentWillMount  ===> render ===> componentDidMount
// 数据更新时：
// shouldComponentUpdate  ==> componentWillUpdate ==>render==>componentDidUpdate
// ComponentWillReceiveProps : 第一次组件接收属性，不会执行该方法；当属性更新之后，会调用该函数；
// componentWillUnMount ==>将要销毁；经常清空定时器；清除事件的监听者；