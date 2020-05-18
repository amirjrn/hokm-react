import React, { useEffect } from 'react';
import useLocalGlobalState from './custom-hooks/useLocalGlobalState';
import addName from './store/actions/name';
import Rooms from './pages/rooms';
import { useSelector } from "react-redux"
import Game from './pages/game';
import Socket from './socket/index';
import { AppState } from "./store/index";
import useSocketListener from './custom-hooks/useSocketListener'
import Errors from './components/status/errors'
import Events from './components/status/events'
import './App.css';
import backSide from './img/backside.png';
import preCache from './logic/preCache';
import NameInput from './components/room/nameInput';
preCache([backSide]);
function App() {
  const [name, setName] = useLocalGlobalState("name", addName);
  const game = useSelector(state => state.game);
  useSocketListener();


  return (

    <div className="App">
      <Errors />
      <Events />
      {!name ? < NameInput name={name} setName={setName} /> : game ? <Game gameName={game} name={name} /> : <Rooms />}
    </div>
  )


}

export default App;
