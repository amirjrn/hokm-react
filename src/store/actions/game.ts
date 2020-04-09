function addGame(game) {
    return {
        type: 'ADD_GAME',
        game
    }
}
export function removeGame() {
    return {
        type: 'REMOVE_GAME',
    }
}
export default addGame;