function setAndRemoveState(setState, state, timeout) {
    setState(prevState => [...prevState, state]);

    setTimeout(() => setState(prevState => {
        var newState = [...prevState];
        newState.shift();
        return newState;
    }), timeout);
}
export default setAndRemoveState;