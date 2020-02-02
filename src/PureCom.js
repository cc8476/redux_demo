/*
* Created by joechen  2020-02-02 10:47
*/
import React,{PureComponent} from 'react';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        // PureCom的state或者props没改，那么不会重新render
        //如果是基本类型，值不变
        //如果是复杂类型，引用不变
        console.log("Purecom render");
        return (
        <div>{this.props.value}</div>
        );
    }
}

export default App;