
import React from 'react';

//高阶组件，就是一个函数，其参数是一个需要被包裹的组件(WrappedComponent)
//函数体是一个实现了特定业务逻辑的组件  (增强功能)
//返回值 = 增加了特定业务逻辑的被包裹组件 (增强的WrappedComponent)


//作用，就是高阶组件内的逻辑，可以被其他组件复用

export default function withTime(WrappedComponent) {

    return class Time extends React.Component {
        constructor(props) {
            super(props);
            this.state ={
                time:0
            };
            this.interval_id=0;
        }
    
        componentDidMount() {
            this.interval_id=setInterval(
                ()=>{
                    this.setState(
                        {
                            time:this.state.time+1
                        }
                    )
                },1000
            )
        };
    
        componentWillUnmount() {
            clearInterval(this.interval_id);
        }

        render() {
            return <WrappedComponent time={this.state.time}  {...this.props}  />
        }
    }

}
