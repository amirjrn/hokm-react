import React, { useEffect, useState } from 'react';
import Socket from "../../socket/index";
import useTempState from './../../custom-hooks/useTempState'
const Events = () => {
    const [events, setEvents] = useTempState([], 5000);
    useEffect(() => {
        Socket.on("new-user", function (name) {
            setEvents(["وارد بازی شد", name]);
        });
        Socket.on("taeen-hakem", function (name) {
            setEvents(["حاکم شد", name]);
        });
        Socket.on("hokm", function (hokm) {
            setEvents(["حکمه", hokm]);
        });
        Socket.on("winner-bazi", function (winner) {
            setEvents(["برنده شد", winner]);
        })
        Socket.on("prev-players", function (name) {
            setEvents(["در بازی حضور دارد", name], 10000);
        });
    }, []);
    return (
        <div>

            <ul className="events">
                {events.map(event => <li className="event">{event[1] + event[0]}</li>)}
            </ul>
        </div>
    );
}

export default Events;