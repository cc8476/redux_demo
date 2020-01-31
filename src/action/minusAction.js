export const MinusAction=()=>{
    return {
        type:"minus"
    };
};

export const reducer = (state={"value":0},action)=>{

    console.log("minus action reducer:",action.type);
    switch(action.type) {

            case "minus":
                return Object.assign({},state,{"value":state.value-1})
            break;
        default:
            return state;
    }
}