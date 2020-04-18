const teamsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TEAMS':
            return action.teams
        case 'SET_WINNER':
            var updated_winner_team = state.map(team => {
                if (team.players.includes(action.name))
                    return Object.assign({}, team, { won_bazi: team.won_bazi + 1 })
                return team
            });
            return updated_winner_team
        default:
            return state;
    }
}
export default teamsReducer;