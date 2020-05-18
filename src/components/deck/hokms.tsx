import React from 'react';
import Playablesuit from './playableSuit';
const Hokms = ({ suits }) => {



    return (
        suits.map(suit => <Playablesuit suit={suit} />)
    )


}

export default Hokms;