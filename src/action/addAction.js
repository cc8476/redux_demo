export const AddAction=()=>{
    return {
        type:"add"
    };
};

export const reducer = (state,action)=>{

    console.log("minus action reducer:",action.type);
    switch(action.type) {

        case "add":
                return Object.assign({},state,{"value":state.value+1})
            break;

        default:
            return state;
    }
}