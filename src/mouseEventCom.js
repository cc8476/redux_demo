/*
* Created by joechen  2020-01-30 19:49
*/
import React from 'react';
import ReactDOM from 'react-dom';

class MouseEventCom extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = ()=>{
            return console.log("箭头函数，不需要bind",this);
        }

        setTimeout(
            ()=>{
                console.log("延迟3秒变更组件的state，即使对render()无影响，也会执行render()")
                this.setState(
                    ()=>{
                        return {num:5}
                    }
                )
            },3000
        );
    }

    handleClickNeedBind() {
        console.log("非箭头函数，需要bind才能指向Component",this);
    }


    render() {
        console.log("render");
        return (
            <div>
                <button onClick={this.handleClick}>click me!</button>
                <p></p>
                <button onClick={this.handleClickNeedBind.bind(this)}>click me!</button>
            </div>
        );
    }
}

export default MouseEventCom;
//ReactDOM.render(<App />,document.getElementById('root'));