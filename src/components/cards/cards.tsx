import React, { useState, useEffect } from 'react';
import Playable from './playableCard';
import sortCards from '../../logic/sortCards'
import Socket from '../../socket/index';


const Cards = () => {
  const [cards, setCards] = useState([]);
  const [showall, setShowall] = useState(false);
  const [turn, setTurn] = useState(false);
  useEffect(() => {
    Socket.on("cards", function (cards) {
      setCards(cards);
    });
    Socket.on("your_turn", function (turn) {
      setTurn(turn);
    })
    Socket.on("hokm", function () {
      setCards(prevstate => [...sortCards(prevstate, true)])
      setShowall(!showall);
    });
  }, []);
  return cards.length ? (
    <div>
      <ul className={`
      cards 
      ${showall ? 'cards showall' : 'cards'}
      ${turn ? 'myturn' : 'notmyturn'}
      `
      }>
        {cards.map((card, i) => {
          return (<Playable card={card} key={i} />);
        })}
      </ul>
    </div>
  ) : (
      <div className="empty">Shuffling</div>
    );
}

export default Cards;
