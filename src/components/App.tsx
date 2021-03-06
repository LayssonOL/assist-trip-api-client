import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as destsActions from "../actions/destinationActions";
import * as prodsActions from "../actions/productsActions";
import * as quotsActions from "../actions/quotationActions";

import InitialPage from "./initialPage";
import UserDataForm from "./userDataForm";


class App extends React.Component<any,any>{

    componentWillMount(){
        this.props.destsActions.fetchDestinations();
        this.props.prodsActions.fetchProducts();
    }
    
    render(){
        return (
            <div className="container">
                <h1 className="bg-success text-light align-center
                    text-center
                ">Amo Promo Seguros</h1>
                {/* <InitialPage className="container" /> */}
                <UserDataForm />
            </div>
        );
    };
}

const mapStateToProps = (state: any) => {
    console.log("STATE")
    console.log(state)
    return {
        destinations: state.dests.destinations,
        products: state.prods.products,
        quotations: state.quots.quotations
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        destsActions: bindActionCreators(destsActions, dispatch),
        prodsActions: bindActionCreators(prodsActions, dispatch),
        quotsActions: bindActionCreators(quotsActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);