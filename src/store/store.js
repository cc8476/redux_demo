import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';

import thunk from 'redux-thunk';

const store= createStore(
    reducer,
    applyMiddleware(thunk)
    );//生成一个store



export default store;