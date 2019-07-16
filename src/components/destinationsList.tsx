import * as React from "react";
import { connect } from "react-redux";
// import IDestProps from "../interfaces/destinationListInterface";
import { IDestination } from "src/actions/actionTypes";

const DestList = (props: any) => {
  //   const destinations = [
  //     { id: 0, name: "América do Sul" },
  //     { id: 1, name: "América do Norte" },
  //     { id: 2, name: "Europa" }
  //   ];


  if(props.dests.isFetching == false && props.dests.destinations.length > 0){
    return (
      <select className="custom-select" defaultValue={props.selectedDest} onChange={(e) => props.handleChange(e)}>
        <option value="0" disabled hidden>Destino</option>
        {props.dests.destinations.map((dest: IDestination) => {
          return (<option value={dest.id} key={dest.id}>
            {dest.name}
          </option>);
        })}
      </select>
    );
  }else{
    return (
      <div className="initialPageLoading">
        Loading...
      </div>
    );
  }
};

const mapStateToProps = (state: any) => {
  console.log("STATE DEST LIST");
  console.log(state);
  return {
    dests: state.dests,
  };
};

export default connect(
  mapStateToProps,
  null
)(DestList);
