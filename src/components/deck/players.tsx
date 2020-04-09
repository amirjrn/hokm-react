import React, { useEffect, useState } from 'react';
import PlayerCard from "./playercards";
import Socket from "../../socket/index";
const Player = ({ name }) => {
    const [playercard, setPlayercard] = useState(false);
    const [showall, setShowall] = useState(false);
    useEffect(() => {
        Socket.on("cards", function () {
            setPlayercard(!playercard);
        });
        Socket.on("hokm", function () {
            setShowall(!showall);
        });
    }, []);
    return (
        <div>
            <div className="playername" >{name}</div>
            <ul className={showall ? 'playercards showall' : 'playercards'}>
                {playercard ? [...Array(13)].map((e, i) => <PlayerCard />) : ""}
            </ul>
        </div>
    );
}

export default Player;