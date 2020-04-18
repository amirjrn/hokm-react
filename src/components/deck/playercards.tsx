import React from 'react';
import backSide from './../../img/backside.png'
const PlayerCard = ({ key }) => {
    return (
        <li key={key} className="playerCard">
            <img className="img-palyercard" src={backSide} alt="playercard"></img>
        </li>
    );
}

export default PlayerCard;