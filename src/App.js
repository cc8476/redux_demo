/*
* Created by joechen  2020-01-26 13:04
*/
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect, Provider} from "react-redux";


import {MinusAction} from './action/minusAction';
import {AddAction} from './action/addAction';


import store from './store/store';
import axios from 'axios';


class App extends React.Component {
    render() {
        let {AddAction,MinusAction,value,ccAction} = this.props;
        return (
            <div>
                <button onClick={AddAction}>add</button>
                <button onClick={MinusAction}>minus</button>
                <div>
                    result:{value}
                </div>
            </div>
        );
    }
}




 
const ccAction= ()=> {

    return (dispatch)=>{ 
        axios.get('http://rap2api.taobao.org/app/mock/242498/single')
        .then(function (response) {
        // handle success
        console.log(response);
        dispatch({"type":"aaaaa"});
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({"type":"aaaaaFail"});
        })
    }
};


function mapDispatchToProps(dispatch) {
	return bindActionCreators({AddAction,MinusAction,ccAction},dispatch);
}

function mapStateToProps(state) {
	return {
		value:state.value
	}
}

const AppConnected = connect(mapStateToProps,mapDispatchToProps)(App);


class AppContainer extends React.Component {
    
    render() {
        return (
            <Provider store= {store}>
            <AppConnected/>
            </Provider>
        )
    }
}


export default AppContainer;

