import React, { useState, useEffect } from 'react';
import Player from "./players";
import Socket from "../../socket/index";
import Card from "../cards/card";
import { useSelector } from 'react-redux';
import Hokms from './hokms';
const Deck = () => {
    const [cardPlayed, setCardPlayed] = useState([]);
    const name = useSelector(state => state.name);
    const teams = useSelector(state => state.teams)
    useEffect(() => {
        Socket.on("card-played", function (card) {
            cardPlayed.length === 4 ? setCardPlayed([]) : setCardPlayed(prevCardsPlayed => [...prevCardsPlayed, card]);
        });
    }, []);
    return (
        <div>

            <ul className="suits">
                {(hakem === name && !hokm) ? <Hokms suits={["del", "khaj", "khesht", "pik"]} /> : "منتظر حکم بمانید"}
            </ul>
            <ul className="players">
                {teams.map(team => team.players.map(player => player !== name ? <Player name={player} myName={name} teams={teams} /> : null))}
            </ul>
            <ul className="deck">
                {cardPlayed.map((card, i) => <Card card={card} key={i} />)}
            </ul>
        </div>
    );
}

export default Deck;