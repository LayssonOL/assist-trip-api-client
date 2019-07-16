import {IDestination, actionTypes, actionStatus} from "./actionTypes";
import {getDestinations} from "../services/assistTrip";

const urlDestinations = () => {
  return "https://demo.assisttrip.com.br/api/base/destinations";
};

export const requestDestinations = () => {
  return {
    type: actionTypes.REQUEST_DESTINATIONS,
    status: actionStatus.IS_FETCHING,
  }
}

export const failedDestinations = (err: Error) => {
  return {
    type: actionTypes.RECEIVE_DESTINATIONS,
    status: actionStatus.FAILED,
    destinations: err
  }
}

export const receiveDestinations = (destinations: Array<IDestination>) => {
  // console.log(destinations)
  return {
    type: actionTypes.RECEIVE_DESTINATIONS,
    status: actionStatus.SUCCESS,
    destinations: destinations
  };
};

export const fetchDestinations = () => {
  
  return (dispatch: any) => {
    dispatch(requestDestinations());
    getDestinations()
    .then((json: IDestination[]) => {
      // console.log("Dests:")
      // console.log(json)
      dispatch(receiveDestinations(json))
    }).catch((err: Error) => {
      dispatch(failedDestinations(err))
    });
  };
};
