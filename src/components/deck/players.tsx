import React, { useEffect, useState } from 'react';
import PlayerCard from "./playercards";
import Socket from "../../socket/index";
import { useSelector } from 'react-redux';
const Player = ({ name }) => {
    // const teams = useSelector(state => state.teams);
    // const myName = useSelector(state => state.name);
    // const myTeam = teams.find(team => team.players.includes(myName));
    // const isTeamate = myTeam.players.includes(name);
    // const pos = isTeamate ? "teamate" : "opponent";
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

        < div  >
            <div className="playername" >{name}</div>
            <ul className={showall ? 'playercards showall' : 'playercards'}>
                {playercard ? [...Array(13)].map((e, i) => <PlayerCard />) : ""}
            </ul>
        </div >

    );

}

export default Player;