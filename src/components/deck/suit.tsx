import React from 'react';
import useImage from '../../custom-hooks/useImage';
const Suit = ({ suit }) => {
    const image = useImage(suit, "png");
    return (
        <img height="50" draggable="false" className="suit" src={image} alt="card"></img>
    );
}

export default Suit;