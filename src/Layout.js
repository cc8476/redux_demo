/*
* Created by joechen  2020-01-30 21:11
*/
import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{borderColor:"red"}}>
                    {this.props.children[0]}
                </div>
                <div style={{borderColor:"green"}}>
                    {this.props.children[1]}
                </div>

            </div>
        );
    }
}

export default Layout;
//ReactDOM.render(<App />,document.getElementById('root'));