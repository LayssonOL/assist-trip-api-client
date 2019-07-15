import IAppState, {initialState} from "../actions/initialState";
import {IProduct, actionTypes} from "../actions/actionTypes";
import {ProductsInterface} from "../actions/actionTypes";

const prods = (state = initialState, action: ProductsInterface) => {
    let newState: IAppState;
    switch(action.type){
        case actionTypes.RECEIVE_PRODUCTS:
            console.log("RECEIVE_PRODUCTS action");
            newState = {
                destinations: state.destinations,
                products: action.products
            };
            return newState;
        default:
            return state;
    }
}

export default prods;