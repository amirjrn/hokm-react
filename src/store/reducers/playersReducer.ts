const playersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SORT_PLAYERS':
            return [action.teams[0].players[0], action.teams[1].players[0], action.teams[0].players[1], action.teams[1].players[1]];
        default:
            return state;
    }
}
export default playersReducer;