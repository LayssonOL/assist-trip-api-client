import { Action } from "redux";

export enum actionTypes {
  REQUEST_DESTINATIONS,
  RECEIVE_DESTINATIONS,
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  REQUEST_QUOTATIONS,
  RECEIVE_QUOTATIONS,
  RECEIVE_PURCHASE_DATA,
  REQUEST_PURCHASE,
  RECEIVE_VOUCHER,
}

export enum actionStatus{
  IS_FETCHING,
  FAILED,
  SUCCESS
}

export interface IContact{
  name: string,
  email: string,
  phone: string,
}

export interface IAddress{
  address: string,
  cep: string,
  city: string,
  state: string,
}

export interface IInsureds{
  external_id: number,
  first_name: string,
  last_name: string,
  date_of_birth: string,
  cpf: string,
}

export interface IPurchase{
  external_id: number,
  plan_id: number,
  coverage_begin: string,
  coverage_end: string,
  destination_id: number,
  contact: IContact,
  address: IAddress,
  insureds: IInsureds[],
}

export interface ICoverage {
  coverage_id: number;
  display_name_ptbr: string;
  display_name_en: string;
  currency: string;
  coverage_value: string;
}
export interface IQuotation {
  product_id: number;
  product_name: string;
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

export interface PurchaseInterface extends Action{
  type: actionTypes,
  status: actionStatus;
  purchase: IPurchase;
}