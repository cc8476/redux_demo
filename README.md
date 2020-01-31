### 0.包含了redux  (App.js)
### 1.包含了react-redux的例子 (App.js)
### 2.redux-thunk的例子 (App.js)
### 3.更好的结构：(addAction.js 和 minusAction.js)
    1，每个action-reducer放在一个文件里；
    2，总的reducer接收所有
    3，每个component自己取对应的action


### 4.增加了react-router的例子   (RouterApp.js)

### 5.组件的Props改变，也会渲染  (FatherCom和sonCom)
### 6.父组件渲染后，子组件也被渲染了，可以利用shouldComponentUpdate来判断渲染  (FatherCom和sonCom2)
### 7.利用map，生成多个子组件  (testCom)
### 8.事件和方法的结合使用  (mouseEventCom)

### 9.延迟3秒变更组件的state，即使对render()无影响，也会执行render(mouseEventCom)

### 10.布局组件Layout,通过this.props.children[0]来限制和渲染具体的子组件(Layout.js 和LayoutContainer.js)

