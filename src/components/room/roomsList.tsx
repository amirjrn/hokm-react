import React, { useState, useEffect } from 'react';
import Socket from "../../socket/index";
import Room from './room';
import Playablecard from '../cards/playableCard';
import Card from '../cards/card'
import { v4 as uuidv4 } from 'uuid';
const RoomsList = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        Socket.emit("reqListOfGames");
        Socket.on("new-game", function (gameName) {
            setRooms(prev => [...prev, gameName]);
        });
        Socket.on("listOfGames", function (games) {
            setRooms(games);
            console.log(games);
        })
    }, []);

    return rooms.length ? (
        <div className="rooms">
            <ul>
                {rooms.map((roomName, i) => {
                    return (<Room room={roomName} key={uuidv4()} />);
                })}
            </ul>
        </div >
    ) : (
            <div className="empty">اتاقی برای بازی وجود ندارد . ابتدا در قسمت پایین یک اتاق به وجود آورید.</div>
        );
}

export default RoomsList;