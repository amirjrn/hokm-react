import React from 'react';
import useImage from '../../custom-hooks/useImage'
import { Suits } from './../../types/suits'
const Card = ({ card }: { card: Suits }) => {
    var img = card[0] + card[1];
    var image = useImage(img, "png")
    return (
        <img height="100" draggable="false" className="img-card" src={image} alt="card"></img>
    )

}
export default Card;