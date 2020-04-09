import { useDispatch, useSelector } from 'react-redux'
import { AppState } from "./../store/index";
function useLocalGlobalState(state, dispatcher: Function) {
    const dispatch = useDispatch();
    var storeState = useSelector((prevstate) => prevstate[state]);
    var localState = localStorage.getItem(state);
    if (localState && (storeState !== localState)) {
        dispatch(dispatcher(localState));
    }
    function setLocalState(newstate) {
        localStorage.setItem(state, newstate);
        dispatch(dispatcher(newstate))
    }
    storeState = useSelector((prevstate) => prevstate[state]);
    return [storeState, setLocalState]
}
export default useLocalGlobalState