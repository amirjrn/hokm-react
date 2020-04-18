import React, { memo } from "react";
import Card from './card';
import usePos from '../../custom-hooks/usePos'
const ReciveableCard = ({ card, name }) => {
    const Pos = usePos(name);
    return (
        <li className={`Card ${Pos}`} >
            <Card card={card}></Card>
        </li>
    );
}
// controlled component , composable component , socket.emit callbackfunction
export default ReciveableCard;