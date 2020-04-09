const teamsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TEAMS':
            return action.teams
        default:
            return state;
    }
}
export default teamsReducer;