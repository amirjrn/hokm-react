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
preCache([backSide]);
function App() {
  const [name, setName] = useLocalGlobalState("name", addName);
  const game = useSelector(state => state.game);
  useSocketListener();
  useEffect(() => {
    var nameprompt = name ? name : prompt("لطفا نام خود را وارد کنید");
    (function sendName() {
      Socket.emit("sendName", nameprompt, function (err, res) {
        if (res === "ok") {
          // bug : calling set name here when name is present in local state cause it to dispath twice
          return setName(nameprompt);
        }
        if (err === "name taken") {
          nameprompt = prompt("این نام وجود دارد لطفا نام دیگری وارد کنید");
          sendName();
        }
      });
    })()

  }, []);

  return (

    <div className="App">
      <Errors />
      <Events />
      {game ? <Game gameName={game} name={name} /> : <Rooms />}
    </div>
  )


}

export default App;
