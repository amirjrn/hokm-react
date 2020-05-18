import React from 'react'
import Deck from '../components/deck/deck'
import { AppState } from '../store/index'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../components/cards/cards'
import Socket from '../socket/index'
import Infos from './../components/status/infos'
import Players from './../components/deck/players'
import Hokm from './../components/deck/hokm'
import { removeGame } from '../store/actions/game'
const Game = ({ gameName, name }) => {
  const dispatch = useDispatch()
  // error handling should be added to socket.emit
  Socket.emit('joinGame', gameName, name)
  Socket.on('err', function (error) {
    if (error === 'Game is full') {
      dispatch(removeGame())
    }
  })
  return (
    <React.Fragment>
      <div className='gameInfo'>
        <div>{gameName}: نام اتاق </div>
        <Infos />
      </div>
      <Hokm />
      <Players />
      <Deck />
      <Cards />
    </React.Fragment>
  )
}

export default Game
