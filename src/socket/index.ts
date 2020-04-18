import io from 'socket.io-client';
import addTeams from './../store/actions/teams';
import { useDisptch } from 'react-redux'

const Socket = io("http://localhost:3000");
const dispatch = useDisptch();
Socket.on("teams", function (teams) {
    dispatch(addTeams(teams));
});
export default Socket;
