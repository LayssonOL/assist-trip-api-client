import {combineReducers} from "redux";
import dests from "./destsReducer";
import prods from "./prodsReducers";
import quots from "./quotsReducers";
import purch from "./purchReducer";

const rootReducer = combineReducers({
    dests,
    prods,
    quots,
    purch
});

export default rootReducer;