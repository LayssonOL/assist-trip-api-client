import {combineReducers} from "redux";
import dests from "./destsReducer";
import prods from "./prodsReducers";
import quots from "./quotsReducers";

const rootReducer = combineReducers({
    dests,
    prods,
    quots
});

export default rootReducer;