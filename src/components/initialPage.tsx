import * as React from "react";
import {connect} from "react-redux";
import DestList from "./destinationsList";
import { IDestination } from "src/actions/actionTypes";

const InitialPage = (props: any) => {
    return (
        <div className="formContainer">
            <form>
                <DestList />
                <input type="date" name="departure" id="departure-date"/>
                <input type="date" name="arrival" id="arrival-date"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log("STATE Init")
    console.log(state)
    return {
        destinations: state.dests.destinations,
        products: state.prods.products
    };
}

export default connect(
    mapStateToProps,
    null
)(InitialPage);

