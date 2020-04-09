import React, { useState, Fragment } from 'react';
import Socket from '../../socket/index'
import Hokms from '../deck/hokms'
const CreateRoom = () => {
    const [input, setInput] = useState();
    const handleChange = (e) => setInput(e.currentTarget.value);
    const handleSubmit = (e) => { Socket.emit("create-room", input); e.preventDefault(); };

    return (


        <form onSubmit={handleSubmit}>
            <input className="roomInput" name="roomInput" onChange={handleChange} />
            <input type="submit" value="افزودن اتاق جدید" />
        </form>

    );
}

export default CreateRoom;