import * as React from "react";
import { actionTypes, actionStatus, IPurchase } from "./actionTypes";
import IPurchaseParams from "src/interfaces/purchaseParams";
import { doPurchase } from "../services/assistTrip";

export const requestPurchase = () => {
    return {
      type: actionTypes.REQUEST_PURCHASE,
      status: actionStatus.IS_FETCHING,
    }
  }
  
  export const failedPurchase = (err: Error) => {
    return {
      type: actionTypes.RECEIVE_VOUCHER,
      status: actionStatus.FAILED,
      destinations: err
    }
  }
  
  export const receivePurchase = (purchase: IPurchase) => {
    // console.log(destinations)
    return {
      type: actionTypes.RECEIVE_VOUCHER,
      status: actionStatus.SUCCESS,
      purchase: purchase
    };
  };

  export const receivePurchaseData = (data: IPurchase) => {
    return {
      type: actionTypes.RECEIVE_PURCHASE_DATA,
      status: actionStatus.SUCCESS,
      purchase: data
    }
  }
  
  export const runPurchase = (params: IPurchaseParams) => {
    return (dispatch: any) => {
      dispatch(requestPurchase());
      doPurchase(params)
      .then((json: IPurchase) => {
        // console.log("Dests:")
        // console.log(json)
        dispatch(receivePurchase(json))
      }).catch((err: Error) => {
        dispatch(failedPurchase(err))
      });
    };
  };