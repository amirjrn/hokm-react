function addTeams(teams) {
    return {
        type: 'ADD_TEAMS',
        teams
    }
}
export function setWinner(name) {
    return {
        type: 'SET_WINNER',
        name
    }
}
export default addTeams;