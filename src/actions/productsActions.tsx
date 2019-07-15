import {IProduct, actionTypes} from "./actionTypes";
import {getProducts} from "../services/assistTrip";

export const receiveProducts = (products: Array<IProduct>) => {
  // console.log(destinations)
  return {
    type: actionTypes.RECEIVE_PRODUCTS,
    products: products
  };
};

export const fetchProducts = () => {
  return (dispatch: any) => {
    getProducts()
    .then((json: IProduct[]) => {
      // console.log("Dests:")
      // console.log(json)
      dispatch(receiveProducts(json))
    });
  };
};
