import IAppState from "../actions/initialState";
import IDestination, * as types from "../actions/actionTypes";
import DestinationInterface from "../actions/actionTypes";

const initialState: IAppState = {
    destinations: new Array<IDestination>()
}

const dests = (state = initialState, action: DestinationInterface) => {
    let newState: IAppState;
    switch(action.type){
        case types.destinationsActionTypes.RECEIVE_DESTINATIONS:
            console.log("RECEIVE_DESTINATIONS action");
            newState = {
                destinations: action.destinations
            };
            return newState;
        default:
            return state;
    }
}

export default dests;