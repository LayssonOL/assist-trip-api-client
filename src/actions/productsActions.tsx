import {IProduct, actionTypes, actionStatus} from "./actionTypes";
import {getProducts} from "../services/assistTrip";

export const requestProducts = () => {
  return {
    type: actionTypes.REQUEST_PRODUCTS,
    status: actionStatus.IS_FETCHING,
  }
}

export const failedProducts = (err: Error) => {
  return {
    type: actionTypes.RECEIVE_PRODUCTS,
    status: actionStatus.FAILED,
    destinations: err
  }
}

export const receiveProducts = (products: Array<IProduct>) => {
  // console.log(destinations)
  return {
    type: actionTypes.RECEIVE_PRODUCTS,
    status: actionStatus.SUCCESS,
    products: products
  };
};

export const fetchProducts = () => {
  return (dispatch: any) => {
    dispatch(requestProducts())
    getProducts()
    .then((json: IProduct[]) => {
      // console.log("Dests:")
      // console.log(json)
      dispatch(receiveProducts(json))
    }).catch((err: Error) => {
      dispatch(failedProducts(err))
    });
  };
};
