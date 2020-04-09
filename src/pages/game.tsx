import React from 'react';
import Deck from '../components/deck/deck';
import { AppState } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/cards/cards';
import Socket from "../socket/index";
import { removeGame } from '../store/actions/game';
const Game = ({ gameName, name }) => {
    const dispatch = useDispatch();
    Socket.emit("join-game", gameName, name);
    Socket.on("err", function (error) {
        if (error === "Game is full") {
            dispatch(removeGame())
        }
    });
    return (
        <React.Fragment>
            <div>{gameName}: نام اتاق </div>
            <Deck />
            <Cards />
        </React.Fragment>

    );
}

export default Game