import {reducer as minusReducer}  from '../action/minusAction';
import {reducer as addReducer}  from '../action/addAction';

const defaultState = {
    value:0,

};

const reducers =[
    minusReducer,
    addReducer
];

export default (state=defaultState,action)=>{

    let newState;
    switch(action.type) {

        default:
            newState=state;
    }

    return reducers.reduce(
        (s,r)=>r(s,action),newState
    )
}