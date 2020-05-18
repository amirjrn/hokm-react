const gameReducer = (state = "", action) => {
    switch (action.type) {
        case 'ADD_GAME':
            return action.game
        case 'REMOVE_GAME':
            return null;
        default:
            return state;
    }
}
export default gameReducer;