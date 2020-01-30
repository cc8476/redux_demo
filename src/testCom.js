/*
* Created by joechen  2020-01-30 17:57
*/
import React from 'react';
import ReactDOM from 'react-dom';

class TestCom extends React.Component {
    constructor(props) {
        super(props);
        this.state ={num:0};
        setTimeout(
            ()=>{
                this.check();
            },3000
        );
    }

    check() {
        console.log("zzz",this.state.num);
        this.setState(
            ()=>{
              return {num:this.state.num+1}
            }
        )
        console.log("zzz",this.state.num);
    };    
    render() {
        const arr= ["zz","bb","ccc"];
        return (
            <ul>
            {
                arr.map(
                    (v)=>{
                        return (<li key={v}>{v}</li>)
                    }
                )
            }
            </ul>
        );
    }
}

export default TestCom;