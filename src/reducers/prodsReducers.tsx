import { IAppState, initialState, IProd } from "../actions/initialState";
import { IProduct, actionTypes, actionStatus } from "../actions/actionTypes";
import { ProductInterface } from "../actions/actionTypes";

const prods = (state = initialState.products, action: ProductInterface) => {
  let newState: IProd;
  switch (action.type) {
    case actionTypes.REQUEST_PRODUCTS:
      newState = Object.assign({}, {
        isFetching: true,
        failed: false,
        products: state.products
      });
      return newState;
    case actionTypes.RECEIVE_PRODUCTS:
      switch (action.status) {
        case actionStatus.FAILED:
          newState = Object.assign({}, {
            isFetching: false,
            failed: true,
            products: action.products
          });
          return newState;
        case actionStatus.SUCCESS:
          newState = Object.assign({}, {
            isFetching: false,
            failed: false,
            products: action.products
          });
          return newState;
        default:
          return state;
      }
    default:
      return state;
  }
};

export default prods;
