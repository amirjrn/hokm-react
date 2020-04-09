import { createStore, combineReducers, applyMiddleware } from "redux";
import gameReducer from './reducers/gameReducers'
import nameReducer from './reducers/nameReducers';
import teamsReducer from './reducers/teamsReducers'
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}


const rootReducer = combineReducers({ game: gameReducer, name: nameReducer, teams: teamsReducer });
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [logger];;

    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    return store;
}