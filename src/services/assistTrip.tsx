import * as React from "react";

const getDestinations = async () => {
  try {
    const headers = {
      accept: "application/json",
      authorization: "Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV"
    };
    const method = "GET";
    const mode = "cors";
    const dest = await fetch(
      "https://demo.assisttrip.com.br/api/base/destinations",
      { method: method, body: JSON.stringify({}), headers: headers }
    ).then((res: Response) => res.json());
    console.log(`Valor de dest: ${dest}`);
    return dest;
    // .then((response: Response) => {
    //   return JSON.stringify(response);
    // });
  } catch (error) {
    console.log(error);
    return JSON.stringify(error);
  }
};

export default {
  getDestinations
}