import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as destsActions from "../actions/destinationActions";
import * as prodsActions from "../actions/productsActions";
import * as quotsActions from "../actions/quotationActions";
import * as purchActions from "../actions/purchaseActions";

const UserDataForm = (props: any) => {
    return (
        <div className="d-flex flex-column">
            <div>
                <Secureds />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    );
}

const Secureds = () => {
    return (
        <div className="d-flex flex-row">
            <div className="p-2 flex-column">
            <label> Nome Completo </label>
            <input type="text" name="name-secured" id="name-secured"/>
            </div>
            <div className="p-2 flex-column">
            <label> Nascimento </label>
            <input type="date" name="birth-secured" id="birth-secured"/>
            </div>
            <div className="p-2 flex-column">
            <label> CPF </label>
            <input type="text" name="cpf-secured" id="nome-secured"/>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <div className="d-flex flex-row">
            <div className="p-2 flex-column">
            <label> Contato </label>
            <input className="flex-colmun" type="text" name="name-secured" id="name-secured"/>
            </div>
            <div className="p-2 flex-column">
            <label> Email </label>
            <input type="email" name="birth-secured" id="birth-secured"/>
            </div>
            <div className="p-2 flex-column">
            <label> CPF </label>
            <input type="text" name="cpf-secured" id="nome-secured"/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log("STATE Init");
    console.log(state);
    return {
      dests: state.dests,
      prods: state.prods,
      quots: state.quots,
      purch: state.purch
    };
  };
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
      destsActions: bindActionCreators(destsActions, dispatch),
      prodsActions: bindActionCreators(prodsActions, dispatch),
      quotsActions: bindActionCreators(quotsActions, dispatch),
      purchActions: bindActionCreators(purchActions, dispatch)
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDataForm);