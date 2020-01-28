/*
* Created by joechen  2020-01-28 12:52
*/
import React from 'react';
import App from './App';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'



class RouterApp extends React.Component {
    render() {
        return (
            <Router>
                <Link to="/home">click me!</Link>
                 <Route path="/home" component={App} />
            </Router>
        );
    }
}

export default RouterApp;