import React from 'react';
import useImage from '../../custom-hooks/useImage';
const PlayerCard = () => {
    const image = useImage("backside", "png");
    return (
        <li className="playerCard">
            <img className="img-palyercard" src={image} alt="playercard"></img>
        </li>
    );
}

export default PlayerCard;