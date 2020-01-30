/*
* Created by joechen  2020-01-30 13:29
*/
import React from 'react';

class SonCom extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {v}=this.props;
        console.log("son render");

        return (
        <div>son...  {v}</div>
        );
    }
}

export default SonCom;