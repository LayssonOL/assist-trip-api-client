import { IAppState, initialState, IDest } from "../actions/initialState";
import {
  IDestination,
  actionTypes,
  actionStatus
} from "../actions/actionTypes";
import { DestinationInterface } from "../actions/actionTypes";

const dests = (
  state = initialState.destinations,
  action: DestinationInterface
) => {
  let newState: IDest;
  switch (action.type) {
    case actionTypes.REQUEST_DESTINATIONS:
      newState = Object.assign({}, {
        isFetching: true,
        failed: false,
        destinations: state.destinations
      });
      return newState;
    case actionTypes.RECEIVE_DESTINATIONS:
      switch (action.status) {
        case actionStatus.FAILED:
          newState = Object.assign({}, {
            isFetching: false,
            failed: true,
            destinations: action.destinations
          });
          return newState;
        case actionStatus.SUCCESS:
          newState = Object.assign({}, {
            isFetching: false,
            failed: false,
            destinations: action.destinations
          });
          return newState;

        default:
          return state;
      }
    default:
      return state;
  }
};

export default dests;
