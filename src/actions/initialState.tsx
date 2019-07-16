import {IDestination, actionStatus} from "./actionTypes";
import {IQuotation} from "./actionTypes";
import {IProduct} from "./actionTypes";

export interface IDest {
    isFetching: boolean,
    failed: boolean,
    destinations: Array<IDestination>,
}

export interface IProd {
    isFetching: boolean,
    failed: boolean,
    products: Array<IProduct>,
}

export interface IQuot {
    isFetching: boolean,
    failed: boolean,
    quotations: Array<IQuotation>,
}

export interface IAppState {
    destinations?: IDest,
    products?: IProd,
    quotations?: IQuot
}


export const initialState: IAppState = {
    destinations: {
        isFetching: false,
        failed: false,
        destinations: []
    },
    products: {
        isFetching: false,
        failed: false,
        products: []
    },
    quotations: {
        isFetching: false,
        failed: false,
        quotations: []
    }
}
