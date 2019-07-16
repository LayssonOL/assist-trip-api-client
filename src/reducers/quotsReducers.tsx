import { IAppState, initialState, IQuot } from "../actions/initialState";
import { IQuotation, actionTypes, actionStatus } from "../actions/actionTypes";
import { QuotationInterface } from "../actions/actionTypes";

const quots = (state = initialState.quotations, action: QuotationInterface) => {
  let newState: IQuot;
  switch (action.type) {
    case actionTypes.REQUEST_QUOTATION:
      newState = Object.assign({}, {
        isFetching: true,
        failed: false,
        quotations: state.quotations
      });
      return newState;
    case actionTypes.RECEIVE_QUOTATIONS:
      switch (action.status) {
        case actionStatus.FAILED:
          newState = Object.assign({}, {
            isFetching: false,
            failed: true,
            quotations: action.quotations
          });
          return newState;
        case actionStatus.SUCCESS:
          newState = Object.assign({}, {
            isFetching: false,
            failed: false,
            quotations: action.quotations
          });
          return newState;
        default:
          return state;
      }
    default:
      return state;
  }
};

export default quots;
