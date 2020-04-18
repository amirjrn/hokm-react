import { useState } from 'react';
import Socket from '../socket/index';
import { AppState } from '../store/index';
import { useSelector } from 'react-redux';
function usePlayable(event, data): [number, (e: any, ui: any) => void] {
    const game = useSelector((state: AppState) => state.game);
    const name = useSelector((state: AppState) => state.name);
    const [pos, setPos] = useState(0);
    const handleDrag = (e, ui) => {
        if (ui.lastY < -110) {
            Socket.emit(event, ...data, name, game);
            setPos(ui.lastY)

        }
    };
    return [pos, handleDrag]
}
export default usePlayable;