import IAppState, {initialState} from "../actions/initialState";
import {IQuotation, actionTypes} from "../actions/actionTypes";
import {QuotationInterface} from "../actions/actionTypes";

const quots = (state = initialState, action: QuotationInterface) => {
    let newState: IAppState;
    switch(action.type){
        case actionTypes.DO_QUOTATION:
            console.log("DO_QUOTATION action");
            newState = {...state, quotations: action.quotations};
            return newState;
        default:
            return state;
    }
}

export default quots;