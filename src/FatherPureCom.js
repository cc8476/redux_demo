/*
* Created by joechen  2020-02-02 10:49
*/
import React from 'react';
import PureCom from './PureCom';


class FatherPureCom extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            time:5,
            list:[1,2,3]
        };
    }

    componentDidMount() {
        setTimeout(this.updateS.bind(this),1000);
    }

    updateS()   {
        let currentList=this.state.list;
        currentList.push(5);
        this.setState(
            (prev,props)=>{
                return {
                    time:5,
                    list:currentList
                }
            }
        );
    }

    render() {
        return (
            <PureCom time ={this.state.time} list={this.state.list}></PureCom>
        );
    }
}

export default FatherPureCom;
