import React from 'react';
import Player from "./player";
import { useSelector } from 'react-redux';
const Players = () => {
    const teams = useSelector(state => state.teams);
    const name = useSelector(state => state.name)
    return (
        <div>
            <ul className="players">
                {teams.map(team => team.players.map(player => player !== name ? <Player name={player} /> : null))}
            </ul>
        </div>
    );
}

export default Players;