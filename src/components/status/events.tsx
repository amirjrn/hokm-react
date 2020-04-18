import React, { useEffect, useState } from 'react';
import setAndRemoveState from '../../logic/setAndRemoveState'
import Socket from "../../socket/index";
const Events = () => {
    const [event, setEvents] = useState([]);
    useEffect(() => {

        Socket.on("new-user", function (name) {
            setAndRemoveState(setEvents, ["وارد بازی شد", name], 4000);
        });
        Socket.on("taeen-hakem", function (name) {
            setAndRemoveState(setEvents, ["حاکم شد", name], 4000);
        });
        Socket.on("hokm", function (hokm) {
            setAndRemoveState(setEvents, ["حکمه", hokm], 4000);
        });
        Socket.on("winner-bazi", function (winner) {
            setAndRemoveState(setEvents, ["برنده شد", winner], 4000);
        })
        Socket.on("prev-players", function (name) {
            setAndRemoveState(setEvents, ["در بازی حضور دارد", name], 10000);
        });
        Socket.on("new-user", function (name) {
            setAndRemoveState(setEvents, ["وارد بازی شد", name], 10000);
        });
    }, []);
    return (
        <div>

            <ul className="errors">
                {event.map(err => <li className="event">{err[1] + err[0]}</li>)}
            </ul>
        </div>
    );
}

export default Events;