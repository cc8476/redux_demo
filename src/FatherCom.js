/*
* Created by joechen  2020-01-30 13:29
*/
import React from 'react';
import Son from './sonCom';
import Son2 from './sonCom2';
class FatherCom extends React.Component {

    constructor(props) {
        super(props);
        this.state ={v:10};

        setTimeout(
            ()=>{
                this.setState(
                    {
                        "v":20
                    }
                )
            },3000
        )
    }

    render() {
        console.log("father  render");
        return (
            <div>
                <Son v={this.state.v}></Son>
                <Son2></Son2>

            </div>
        );
    }
}

export default FatherCom;