import React from "react";
import Card from './card';
import usePlayable from '../../custom-hooks/usePlayable'
import Draggable from 'react-draggable';
const PlayableCard = ({ card }) => {
  const [pos, handleDrag] = usePlayable("sendcard", card);
  return (
    <Draggable
      axis="y"
      position={{ x: 0, y: pos }}
      onStop={handleDrag}
    >
      <li className="card" data-card={card[0] + card[1]} >
        <Card card={card}></Card>
      </li>
    </Draggable >
  );
}
// controlled component , composable component , socket.emit callbackfunction
export default PlayableCard;