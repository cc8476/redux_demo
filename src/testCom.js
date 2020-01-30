/*
* Created by joechen  2020-01-30 17:57
*/
import React from 'react';
import ReactDOM from 'react-dom';

class TestCom extends React.Component {
    constructor(props) {
        super(props);
    }
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