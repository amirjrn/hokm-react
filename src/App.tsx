import React, { useEffect } from 'react';
import useLocalGlobalState from './custom-hooks/useLocalGlobalState';
import addName from './store/actions/name';
import addGame from './store/actions/game'
import Rooms from './pages/rooms';
import { useSelector } from "react-redux"
import Game from './pages/game';
import Socket from './socket/index';
import Suit from "./components/deck/suit"
import { AppState } from "./store/index";
import Errors from './components/status/errors'
import Events from './components/status/events'
import './App.css';
import Playablesuit from './components/deck/playableSuit';

function App() {
  const [name, setName] = useLocalGlobalState("name", addName);
  const game = useSelector(state => state.game)
  useEffect(() => {
    var nameprompt = name ? name : prompt("لطفا نام خود را وارد کنید");
    Socket.emit("sendName", nameprompt);
    Socket.on("result", function (result) {
      if (result === "ok") {
        // bug : calling set name here when name is present in local state cause it to dispath twice
        setName(nameprompt);
      }
      else if (result === "name taken") {
        nameprompt = prompt("این نام وجود دارد لطفا نام دیگری وارد کنید");
        Socket.emit("sendName", nameprompt);
      }
    });

  }, []);

  return (

    <div className="App">
      <li >{name}</li>
      <Errors />
      <Events />
      {game ? <Game gameName={game} name={name} /> : <Rooms />}
    </div>
  )
}

export default App;
