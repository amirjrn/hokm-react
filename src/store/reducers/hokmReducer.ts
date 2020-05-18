const hokmReducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_HOKM':
            return action.name
        default:
            return state;
    }
}
export default hokmReducer;