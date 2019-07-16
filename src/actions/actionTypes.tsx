import { Action } from "redux";

export enum actionTypes {
  REQUEST_DESTINATIONS,
  RECEIVE_DESTINATIONS,
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  REQUEST_QUOTATIONS,
  RECEIVE_QUOTATIONS,

}

export enum actionStatus{
  IS_FETCHING,
  FAILED,
  SUCCESS
}

export interface ICoverage {
  id: number;
  display_name_ptbr: string;
  display_name_en: string;
  currency: string;
  coverage_value: string;
}
export interface IQuotation {
  id: number;
  name: string;
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

export interface ProductInterface extends Action {
  type: actionTypes;
  status: actionStatus;
  products: Array<IProduct>;
}
export interface DestinationInterface extends Action {
  type: actionTypes;
  status: actionStatus;
  destinations: Array<IDestination>;
}

export interface QuotationInterface extends Action{
  type: actionTypes,
  status: actionStatus;
  quotations: Array<IQuotation>;
}