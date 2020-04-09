import React, { useState, useEffect } from 'react';
import Playable from './playableCard';
import sortCards from '../../logic/sortCards'
import Socket from '../../socket/index';
import { v4 as uuidv4 } from 'uuid';

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
    Socket.on("remove-card", function (card) {
      console.log(card);
      setCards(prevCards => prevCards.filter(prevcard => prevcard[0] !== card[0] || prevcard[1] !== card[1]))
    })
  }, []);
  return cards.length ? (
    <div>
      <ul className={`
      cards 
      ${showall ? 'cards showall' : 'cards'}
      ${turn ? 'myturn' : 'notmyturn'}
      `
      }>
        {cards.map(card => {
          return (<Playable card={card} key={uuidv4()} />);
        })}
      </ul>
    </div>
  ) : (
      <div className="empty">Shuffling</div>
    );
}

export default Cards;
