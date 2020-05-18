import React, { memo } from 'react';
import useImage from '../../custom-hooks/useImage'
import { Suits } from './../../types/suits';
import backSide from './../../img/backside.png';
const Card = ({ card }: { card: Suits }) => {

    const img = card[0] + card[1];
    const image = useImage(img, "png", backSide)
    return (
        <img height="100" draggable="false" className="img-card" src={image} alt="card"></img>
    )

}
export default memo(Card);