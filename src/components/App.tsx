import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as destsActions from "../actions/destinationActions";
import * as prodsActions from "../actions/productsActions";
import * as quotsActions from "../actions/quotationActions";


class App extends React.Component<any,any>{
    componentWillMount(){
        this.props.destsActions.fetchDestinations();
    }

    render(){
        return (
            <div className="initPageContainer">
                <p>Amo Promo Viagens</p>
                
                {/* {this.props.destinations.length > 0 ?
                    <div>
                        <ul>
                            {
                                this.props.destinations.forEach((dest: IDestination) => {
                                    return <li>{dest.name}</li>
                                })
                            }
                        </ul>
                    </div>
                    :
                    <div className="initPageEmptyContainer">
                        No Data
                    </div>
                } */}
            </div>
        );
    };
}

const mapStateToProps = (state: any) => {
    console.log("STATE")
    console.log(state)
    return {
        destinations: state.dests.destinations,
        products: state.prods.products
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        destsActions: bindActionCreators(destsActions, dispatch),
        prodsActions: bindActionCreators(prodsActions, dispatch),
        quotsActions: bindActionCreators(destsActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);