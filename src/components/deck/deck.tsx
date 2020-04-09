import React, { useState, useEffect } from 'react';
import Player from "./players";
import Socket from "../../socket/index";
import Card from "../cards/card";
import { useSelector, useDispatch } from 'react-redux';
import Suit from './suit';
import Hokms from './hokms';
import addTeams from './../../store/actions/teams'
import setAndRemoveState from '../../logic/setAndRemoveState';
import { v4 as uuidv4 } from 'uuid';
import playerPos from '../../logic/playerPos';
const Deck = () => {
    const dispatch = useDispatch();
    const [events, setEvents] = useState([]);
    const [players, setPlayers] = useState([]);
    const [cardPlayed, setCardPlayed] = useState([]);
    const [hokm, setHokm] = useState();
    const [hakem, setHakem] = useState();
    const [playerIndex, setPlayerIndex] = useState(0);
    const name = useSelector(state => state.name);
    const teams = useSelector(state => state.teams)
    useEffect(() => {
        Socket.on("teams", function (teams) {
            dispatch(addTeams(teams));
        })
        Socket.on("prev-players", function (name) {
            setPlayerIndex(playerIndex + 1);
            setPlayers(prevPlayers => [...prevPlayers, name]);
        });
        Socket.on("new-user", function (name) {
            setPlayers(prevPlayers => [...prevPlayers, name]);
            setAndRemoveState(setEvents, ["وارد بازی شد", name], 4000);
        });
        Socket.on("taeen-hakem", function (name) {
            setHakem(name)
            setAndRemoveState(setEvents, ["حاکم شد", name], 4000);
        })
        Socket.on("hokm", function (hokm) {
            setAndRemoveState(setEvents, ["حکمه", hokm], 4000);
            setHokm(hokm);
            console.log(hokm, "hokm")
        });
        Socket.on("winner-bazi", function (winner) {
            setAndRemoveState(setEvents, ["برنده شد", winner], 4000);
            setCardPlayed([]);

        })
        Socket.on("card-played", function (card) {
            setCardPlayed(prevCardsPlayed => [...prevCardsPlayed, card]);
        });
    }, []);
    return (
        <div>


            <div>{`حاکم بازی : ${hakem ? hakem : "تعیین نشده"}`}</div>
            <div>{hokm ? <Suit suit={hokm} /> : "حکم تعیین نشده"}</div>
            <ul className="suits">
                {(hakem === name && !hokm) ? <Hokms suits={["del", "khaj", "khesht", "pik"]} /> : "منتظر حکم بمانید"}
            </ul>
            <ul className="events">
                {events.map(event => <li className="event">{event[1] + event[0]}</li>)}
            </ul>
            <ul className="players">
                {/* {teams.map(team => team.players.map(player => player !== name ? <Player name={player} key={uuidv4()} /> : null))} */}
                {players.map(player => <Player name={player} key={uuidv4()} />)}
            </ul>
            <ul className="deck">
                {cardPlayed.map((card, i) => <Card card={card} key={i} />)}
            </ul>
        </div>
    );
}

export default Deck;