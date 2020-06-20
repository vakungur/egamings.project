import {combineReducers} from "redux";
import gamesReducer from "./games/reducers";

const rootReducer = combineReducers({
    gamesReducer,
});

export default rootReducer;
