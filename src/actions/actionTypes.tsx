import { Action } from "redux";

export enum actionTypes {
  RECEIVE_DESTINATIONS,
  RECEIVE_PRODUCTS,
  DO_QUOTATION
}

export interface ICoverage {
  id: number;
  display_name_ptbr: string;
  display_name_en: string;
  currency: string;
  coverage_value: string;
}
export interface IQuotation {
  product_id: number;
  net_price: number;
  elder_net_price: number;
  currency: string;
  exchange_rate: number;
  coverages: Array<ICoverage>;
}

export interface IProduct {
  id: number;
  name: string;
  min_age: number;
  elder_age: number;
  max_age: number;
  coverages: Array<ICoverage>;
}

export interface IDestination {
  id: number;
  name: string;
}

export interface ProductsInterface extends Action {
  type: actionTypes;
  products: Array<IProduct>;
}
export interface DestinationInterface extends Action {
  type: actionTypes;
  destinations: Array<IDestination>;
}

export interface QuotationInterface extends Action{
  type: actionTypes,
  quotations: Array<IQuotation>;
}