import React, { memo } from 'react'
import Card from './card'
import usePlayable from '../../custom-hooks/usePlayable'
import Draggable from 'react-draggable'
const PlayableCard = ({ card }) => {
  const [pos, handleDrag] = usePlayable('sendCard', card)
  console.log('render playable')
  return (
    <Draggable axis='y' position={{ x: 0, y: pos }} onStop={handleDrag}>
      <li className='card'>
        <Card card={card}></Card>
      </li>
    </Draggable>
  )
}
// controlled component , composable component , socket.emit callbackfunction
export default memo(PlayableCard)
