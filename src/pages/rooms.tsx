import React from 'react';
import CreateRoom from '../components/room/createRoom';
import RoomsList from '../components/room/roomsList';

const Rooms = () => {
    return (
        <React.Fragment>
            <RoomsList />
            <CreateRoom />
        </React.Fragment>

    );
}

export default Rooms;