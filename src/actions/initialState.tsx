import {IDestination} from "./actionTypes";
import {IQuotation} from "./actionTypes";
import {IProduct} from "./actionTypes";

export default interface IAppState {
    destinations: IDestination[],
    products: IProduct[],
    quotations?: IQuotation[]
}


export const initialState: IAppState = {
    destinations: [],
    products: []
}
