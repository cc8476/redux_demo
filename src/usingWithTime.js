/*
* Created by joechen  2020-02-01 18:39
*/
import React from 'react';
import withTime from './withTime';
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>{this.props.time}</div>
        );
    }
}

export default withTime(App);
