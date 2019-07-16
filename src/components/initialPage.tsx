import * as React from "react";
import {connect} from "react-redux";
import DestList from "./destinationsList";

const InitialPage = (props: any) => {
    if (props.dests.isFetching == false && props.dests.destinations.length > 0){
    return (
        <div className="formContainer">
            <form>
                <DestList />
                <input type="date" name="departure" id="departure-date"/>
                <input type="date" name="arrival" id="arrival-date"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )}else{
        return(
            <div className="initialPageLoading">Loading...</div>
        );
    }
}

const mapStateToProps = (state: any) => {
    console.log("STATE Init")
    console.log(state)
    return {
        dests: state.dests,
    };
}

export default connect(
    mapStateToProps,
    null
)(InitialPage);

