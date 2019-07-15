import {IQuotation, actionTypes} from "./actionTypes";
import {doQuotation} from "../services/assistTrip";
import IQuotationParams from "../interfaces/quotationParams";

export const receiveQuotations = (quotations: Array<IQuotation>) => {
  // console.log(destinations)
  return {
    type: actionTypes.DO_QUOTATION,
    quotations: quotations
  };
};

export const doQuotations = (params: IQuotationParams) => {
  return (dispatch: any) => {
    doQuotation(params)
    .then((json: IQuotation[]) => {
      // console.log("Dests:")
      // console.log(json)
      dispatch(receiveQuotations(json))
    });
  };
};
