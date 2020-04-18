
import { useSelector } from 'react-redux';
import playerPos from '../logic/playerPos'
function usePos(name) {
    const myName = useSelector(state => state.name);
    const players = useSelector(state => state.players)
    const Pos = playerPos(name, myName, players);
    return Pos
}
export default usePos;