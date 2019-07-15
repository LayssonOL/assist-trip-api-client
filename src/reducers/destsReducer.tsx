import IAppState, {initialState} from "../actions/initialState";
import {IDestination, actionTypes}  from "../actions/actionTypes";
import {DestinationInterface} from "../actions/actionTypes";

const dests = (state = initialState, action: DestinationInterface) => {
    let newState: IAppState;
    switch(action.type){
        case actionTypes.RECEIVE_DESTINATIONS:
            console.log("RECEIVE_DESTINATIONS action");
            newState = {
                destinations: action.destinations,
                products: state.products
            };
            return newState;
        default:
            return state;
    }
}

export default dests;