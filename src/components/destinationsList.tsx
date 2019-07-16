import * as React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
// import IDestProps from "../interfaces/destinationListInterface";
import { IDestination } from "src/actions/actionTypes";

const DestList = (props: any) => {
  const [selectedDest, setSelectedDest] = useState("Destino");

  //   const destinations = [
  //     { id: 0, name: "América do Sul" },
  //     { id: 1, name: "América do Norte" },
  //     { id: 2, name: "Europa" }
  //   ];

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelectedDest(event.currentTarget.value);
  };

  return (
    <select value={selectedDest} onChange={e => handleChange(e)}>
      {props.destinations.map((dest: IDestination, i: number) => {
        <option value={dest.name} key={dest.id.toString()}>
          {dest.name}
        </option>;
      })}
    </select>
  );
};

const mapStateToProps = (state: any) => {
  console.log("STATE DEST LIST");
  console.log(state);
  return {
    destinations: state.dests.destinations,
    products: state.prods.products
  };
};

export default connect(
  mapStateToProps,
  null
)(DestList);
