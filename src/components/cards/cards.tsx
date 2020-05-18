import React, { useState, useEffect } from 'react';
import Playable from './playableCard';
import sortCards from '../../logic/sortCards'
import Socket from '../../socket/index';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [showall, setShowall] = useState(false);
  const [turn, setTurn] = useState(true);
  useEffect(() => {
    Socket.on("cards", function (cards) {
      setCards(cards);
    });
    Socket.on("taeen-hakem", function (name) {
      setShowall(false);
      console.log("here")
    })
    Socket.on("hokm", function () {
      setCards(prevstate => [...sortCards(prevstate, true)])
      setShowall(true);
    });
    Socket.on("remove-card", function (card) {
      setCards(prevCards => prevCards.filter(prevcard => prevcard[0] !== card[0] || prevcard[1] !== card[1]))
    })
  }, []);
  return cards.length ? (
    <div>
      <ul className={`
      cards 
      ${showall ? 'showall' : ''}
      myturn
      `
      }>
        {cards.map((card, i) => {
          return (<Playable card={card} key={JSON.stringify(card)} />);
        })}
      </ul>
    </div>
  ) : (
      <div className="empty">Shuffling</div>
    );
}
export default Cards;
