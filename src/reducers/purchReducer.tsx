import { PurchaseInterface, actionTypes, actionStatus } from "../actions/actionTypes";
import {initialState, IPurch} from "../actions/initialState";
import { doPurchase } from "src/services/assistTrip";

const purch = (state = initialState.purchase, action: PurchaseInterface) => {
    let newState: IPurch;
  switch (action.type) {
    case actionTypes.REQUEST_PURCHASE:
      newState = Object.assign({}, {
        isFetching: true,
        failed: false,
        purchase: state.purchase
      });
      return newState;
    case actionTypes.RECEIVE_PURCHASE_DATA:
        newState = Object.assign({},{
            ...state,
            purchase: {
                ...state.purchase,
                ...action.purchase
            }
        });
    case actionTypes.RECEIVE_VOUCHER:
      switch (action.status) {
        case actionStatus.FAILED:
          newState = Object.assign({}, {
            isFetching: false,
            failed: true,
            purchase: action.purchase
          });
          return newState;
        case actionStatus.SUCCESS:
          newState = Object.assign({}, {
            isFetching: false,
            failed: false,
            purchase: action.purchase
          });
          return newState;
        default:
          return state;
      }
    default:
      return state;
  }
}

export default purch;