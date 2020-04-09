import React from 'react';
import usePlayable from '../../custom-hooks/usePlayable'
import Suit from './suit'
import Draggable from 'react-draggable'
const Playablesuit = ({ suit }) => {
    const [pos, handleDrag] = usePlayable("hokm", [suit]);
    return (
        <Draggable
            axis="y"
            position={{ x: 0, y: pos }}
            onStop={handleDrag}
        >
            <li>
                <Suit suit={suit} />
            </li>
        </Draggable>
    );
}

export default Playablesuit;