const hakemReducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_HAKEM':
            return action.name
        default:
            return state;
    }
}
export default hakemReducer;