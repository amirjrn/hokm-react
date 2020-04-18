import React, { useEffect, useState, memo } from 'react';
import PlayerCard from "./playercards";
import Socket from "../../socket/index";
import playerPos from './../../logic/playerPos'
const Player = ({ name, myName, teams }) => {
    const pos = playerPos(name, myName, teams);
    const [playercard, setPlayercard] = useState(false);
    const [showall, setShowall] = useState(false);
    useEffect(() => {
        Socket.on("cards", function () {
            setPlayercard(!playercard);
            console.log("here");
            console.log(playercard);
        });
        Socket.on("hokm", function () {
            setShowall(!showall);
        });
    }, []);
    return (

        < div className={pos} >
            <div className="playername" >{name}</div>
            <ul className={showall ? 'playercards showall' : 'playercards'}>
                {playercard ? [...Array(13)].map((e, i) => <PlayerCard key={i} />) : ""}
            </ul>
        </div >

    );

}

export default memo(Player);