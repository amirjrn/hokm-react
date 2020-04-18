import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import addTeams, { setWinner } from './../store/actions/teams';
import setHokm from './../store/actions/hokm';
import setHakem from './../store/actions/hakem';
import Socket from './../socket/index';
import sortPlayers from './../store/actions/sortPlayers';
const useSocketListener = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        Socket.on("teams", function (teams) {
            dispatch(addTeams(teams));
            dispatch(sortPlayers(teams))
        });
        Socket.on("winner-bazi", function (name) {
            dispatch(setWinner(name))
        });
        Socket.on("hokm", function (teams) {
            dispatch(setHokm(teams));
        });
        Socket.on("taeen-hakem", function (name) {
            dispatch(setHakem(name))
        })
    }, [])
}
export default useSocketListener