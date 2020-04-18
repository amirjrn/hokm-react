

const playerIndexos = (name, myName, teams) => {
    const playersOrder = [teams[0].players[0], teams[1].players[0], teams[0].players[1], teams[1].players[1]];
    const myIndex = playersOrder.indexOf(myName);
    const playerIndex = playersOrder.indexOf(name);
    if ((myIndex + playerIndex) % 2 === 0) {
        return "teamate"
    }
    else if (myIndex < playerIndex) {
        if (playerIndex - myIndex === 1) {
            return "first"
        }
        else {
            return "second"
        }
    }
    else {
        if (playerIndex - myIndex === -1) {
            return "second"
        }
        else {
            return "first"
        }
    }

}

export default playerIndexos