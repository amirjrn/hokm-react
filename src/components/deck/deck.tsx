import React, { useState, useEffect, memo } from 'react';
import Socket from "../../socket/index";
import ReciveableCard from '../cards/reciveableCard';
const Deck = () => {
    const [cardPlayed, setCardPlayed] = useState([]);
    if (cardPlayed.length === 4) {
        setTimeout(() => {
            setCardPlayed([])
        }, 2000);
    }
    useEffect(() => {
        Socket.on("card-played", function (card, name) {
            setCardPlayed(prevCardsPlayed => [...prevCardsPlayed, { card, name }]);
        });
    }, []);
    return (
        <div>
            <ul className="deck">
                {cardPlayed.map((card, i) => <ReciveableCard card={card.card} name={card.name} key={i} />)}
            </ul>
        </div>
    );
}

export default Deck;