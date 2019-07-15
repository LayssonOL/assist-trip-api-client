import {IDestination, actionTypes} from "./actionTypes";
import {getDestinations} from "../services/assistTrip";

const urlDestinations = () => {
  return "https://demo.assisttrip.com.br/api/base/destinations";
};

export const receiveDestinations = (destinations: Array<IDestination>) => {
  // console.log(destinations)
  return {
    type: actionTypes.RECEIVE_DESTINATIONS,
    destinations: destinations
  };
};

export const fetchDestinations = () => {
  return (dispatch: any) => {
    getDestinations()
    .then((json: IDestination[]) => {
      // console.log("Dests:")
      // console.log(json)
      dispatch(receiveDestinations(json))
    });
  };
};
