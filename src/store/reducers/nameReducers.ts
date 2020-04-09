const nameReducer = (state = "", action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return action.name
        default:
            return state;
    }
}
export default nameReducer;