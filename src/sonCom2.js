/*
* Created by joechen  2020-01-30 13:29
*/
import React from 'react';

class SonCom2 extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("son2 do not render");
        return false;
    }

    render() {
        console.log("son2 render");

        return (
        <div>son2... </div>
        );
    }
}

export default SonCom2;