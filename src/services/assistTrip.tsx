import * as React from "react";
import IQuotationParams from "../interfaces/quotationParams";
import IPurchaseParams from "src/interfaces/purchaseParams";

export const baseURL = "https://demo.assisttrip.com.br/api";

export const getDestinations = async () => {
  try {
    const headers = {
      accept: "application/json",
      authorization: "Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV"
    };
    const method = "GET";
    const mode = "cors";
    const dest = await fetch(
      `${baseURL}/base/destinations`,
      { method: method, mode: mode, headers: headers }
    ).then((res: Response) => res.json());
    // console.log(`Valor de dest: ${dest}`);
    return dest;
    // .then((response: Response) => {
    //   return JSON.stringify(response);
    // });
  } catch (error) {
    console.log(error);
    return JSON.stringify(error);
  }
};

export const getProducts = async () => {
  try {
    const headers = {
      accept: "application/json",
      authorization: "Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV"
    };
    const method = "GET";
    const mode = "cors";
    const prods = await fetch(
      `${baseURL}/base/products`,
      { method: method, mode: mode, headers: headers }
    ).then((res: Response) => res.json());
    // console.log(`Valor de prods: ${prods}`);
    return prods;
  } catch (error) {
    return JSON.stringify(error);
  }
};

export const doQuotation = async (params: IQuotationParams) => {
  // const {coverage_begin, coverage_end, destination, coverages} = params;
  try {
    const headers = {
      "accept": "application/json",
      "authorization": "Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV",
      "Content-Type": "application/json"
    };
    const body = Object.assign({}, params);
    /* {
      "coverage_begin": coverage_begin,
      "coverage_end": coverage_end,
      "destination": destination,
      "coverages": coverages
    }; */
    // console.log(body)
    const method = "POST";
    const mode = "cors";
    const quots = await fetch(
      `${baseURL}/quotation`,
      { method: method, mode: mode, body: JSON.stringify(body), headers: headers }
    ).then((res: Response) => res.json());
    console.log("Valor de quots: ");
    console.log(quots);
    return quots;
  } catch (error) {
    return JSON.stringify(error);
  }
}


export const doPurchase = async (params: IPurchaseParams) => {
  try {
    const headers = {
      "accept": "application/json",
      "authorization": "Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV",
      "Content-Type": "application/json"
    };
    const body = Object.assign({}, params);
    // console.log(body)
    const method = "POST";
    const mode = "cors";
    const quots = await fetch(
      `${baseURL}/quotation`,
      { method: method, mode: mode, body: JSON.stringify(body), headers: headers }
    ).then((res: Response) => res.json());
    console.log("Valor de quots: ");
    console.log(quots);
    return quots;
  } catch (error) {
    return JSON.stringify(error);
  }
}