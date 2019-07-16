import {IQuotation, actionTypes, actionStatus} from "./actionTypes";
import {doQuotation} from "../services/assistTrip";
import IQuotationParams from "../interfaces/quotationParams";

export const requestQuotations = () => {
  return {
    type: actionTypes.REQUEST_PRODUCTS,
    status: actionStatus.IS_FETCHING,
  }
}

export const failedQuotations = (err: Error) => {
  return {
    type: actionTypes.RECEIVE_PRODUCTS,
    status: actionStatus.FAILED,
    destinations: err
  }
}

export const receiveQuotations = (quotations: Array<IQuotation>) => {
  // console.log(destinations)
  return {
    type: actionTypes.REQUEST_QUOTATION,
    status: actionStatus.SUCCESS,
    quotations: quotations
  };
};

export const doQuotations = (params: IQuotationParams) => {
  return (dispatch: any) => {
    dispatch(requestQuotations());
    doQuotation(params)
    .then((json: IQuotation[]) => {
      // console.log("Dests:")
      // console.log(json)
      dispatch(receiveQuotations(json))
    }).catch((err) => {
      dispatch(failedQuotations(err))
    });
  };
};
