import React from 'react';
import useImage from '../../custom-hooks/useImage';
const PlayerCard = ({ key }) => {
    const image = useImage("backside", "png");
    return (
        <li key={key} className="playerCard">
            <img className="img-palyercard" src={image} alt="playercard"></img>
        </li>
    );
}

export default PlayerCard;