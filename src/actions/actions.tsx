import IDestination, * as types from "./actionTypes";
// import assistTrip from "../services/assistTrip";

const urlDestinations = () => {
  return "https://demo.assisttrip.com.br/api/base/destinations";
};

export const receiveDestinations = (destinations: Array<IDestination>) => {
  // console.log(destinations)
  return {
    type: types.destinationsActionTypes.RECEIVE_DESTINATIONS,
    destinations: destinations
  };
};

export const fetchDestinations = () => {
  return (dispatch: any) => {
    const headers = {
      accept: "application/json",
      authorization: "Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV"
    };
    const method = "GET";
    const mode = "cors";
    fetch(
      urlDestinations(),
      { method: method, mode: mode, headers: headers }
    ).then((res: Response) => res.json())
    .then((json: IDestination[]) => {
      // console.log("Dests:")
      // console.log(json)
      dispatch(receiveDestinations(json))
    });
  };
};
