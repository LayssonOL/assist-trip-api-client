import * as React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as destsActions from "../actions/actions";
import IAppState from "../actions/initialState";
import IProps from "../interfaces/initialPageInterfaces";
import IState from "../interfaces/initialPageInterfaces";


class InitialPage extends React.Component<any,IAppState>{
    componentWillMount(){
        this.props.destsActions.fetchDestinations();
    }

    public render(){
        return (
            <div className="initPageContainer">
                <p>Amo Promo Viagens</p>
                
                {this.props.destinations.length > 0 ?
                    <div>{this.props.destinations}</div>
                    :
                    <div className="initPageEmptyContainer">
                        No Data
                    </div>
                }
            </div>
        );
    };
}

const mapStateToProps = (state: IAppState) => {
    return {
        destinations: state.destinations
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        destsActions: bindActionCreators(destsActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InitialPage);