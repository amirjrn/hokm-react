import React from 'react';
import { useDispatch } from "react-redux"
import addGame from '../../store/actions/game';
const Room = ({ room }) => {
    const dispatch = useDispatch();
    return (
        <li onClick={() => {
            dispatch(addGame(room));
        }}>
            <div className="roomname">{room}</div>
        </li>
    );
}

export default Room;