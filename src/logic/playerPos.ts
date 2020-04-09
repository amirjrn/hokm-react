const playerPos = (playerP, myP) => {
    if (playerP >= myP) {
        playerP++;
    }
    if ((myP + playerP) % 2 === 0) {
        return "teamate"
    }
    else if (myP < playerP) {
        if (playerP - myP === 1) {
            return "first"
        }
        else {
            return "second"
        }
    }
    else {
        if (playerP - myP === -1) {
            return "second"
        }
        else {
            return "first"
        }
    }

}

export default playerPos