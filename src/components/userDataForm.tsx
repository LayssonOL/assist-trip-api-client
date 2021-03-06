import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as destsActions from "../actions/destinationActions";
import * as prodsActions from "../actions/productsActions";
import * as quotsActions from "../actions/quotationActions";
import * as purchActions from "../actions/purchaseActions";

class UserDataForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      contact: {
        name: "",
        email: "",
        phone: ""
      },
      address: {
        address: "",
        cep: "",
        city: "",
        state: ""
      },
      insureds: [
        {
          external_id: -1,
          first_name: "",
          last_name: "",
          date_of_birth: "",
          cpf: ""
        }
      ]
    };
  }

  Secureds = () => {
    return (
      <div className="d-flex flex-row justify-content-between">
        <div className="p-2 d-flex flex-column">
          <label className="align-self-start"> Nome Completo </label>
          <input
            className="align-self-end form-control"
            type="text"
            name="name-secured"
            id="name-secured"
          />
        </div>
        <div className="p-2 d-flex flex-column">
          <label className="align-self-start"> Nascimento </label>
          <input
            className="align-self-end form-control"
            type="date"
            name="birth-secured"
            id="birth-secured"
          />
        </div>
        <div className="p-2 d-flex flex-column">
          <label className="align-self-start"> CPF </label>
          <input
            className="align-self-end form-control"
            type="text"
            name="cpf-secured"
            id="nome-secured"
          />
        </div>
      </div>
    );
  };

  Contact = () => {
    return (
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex flex-row justify-content-between">
          <div className="p-2 d-flex flex-column">
            <label className="align-self-start"> Contato </label>
            <input
              className="align-self-end form-control"
              type="text"
              name="contact-name"
              id="contact-name"
            />
          </div>
          <div className="p-2 d-flex flex-column">
            <label className="align-self-start"> Email </label>
            <input
              className="align-self-end form-control"
              type="email"
              pattern=".+@*.com.*"
              size={30}
              name="contact-email"
              id="contact-email"
              required
            />
          </div>
          <div className="p-2 d-flex flex-column">
            <label className="align-self-start"> Telefone </label>
            <input
              className="align-self-end form-control"
              type="tel"
              size={10}
              pattern="([0-9]{2})9[0-9]{4}-[0-9]{4}"
              name="contact-phone"
              id="contact-phone"
            />
          </div>
        </div>
        <this.Address />
      </div>
    );
  };

  Address = () => {
    return (
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex flex-row justify-content-between">
          <div className="p-2 d-flex flex-column flex-shrink">
            <label className="align-self-start flex-fill"> CEP </label>
            <input
              className="align-self-end flex-fill form-control"
              type="text"
              pattern="[0-9]{2}.[0-9]{3}-[0-9]{3}"
              size={8}
              name="cep"
              id="cep"
            />
          </div>
          <div className="p-2 d-flex flex-column flex-grow-1">
            <label className="align-self-start"> Endereço </label>
            <input
              className="align-self-end w-100 form-control"
              type="text"
              maxLength={40}
              name="add"
              id="add"
            />
          </div>
          <div className="p-2 d-flex flex-column flex-shrink-1">
            <label className="align-self-start"> Número </label>
            <input
              className="align-self-end form-control"
              type="text"
              pattern="[0-9]{4}"
              maxLength={4}
              name="num"
              id="num"
            />
          </div>
          <div className="p-2 d-flex flex-column flex-shrink-1">
            <label className="align-self-start"> Complemento </label>
            <input
              className="align-self-end form-control"
              type="text"
              maxLength={30}
              name="comp"
              id="comp"
            />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className="p-2 d-flex flex-column">
            <label className="align-self-start"> Bairro </label>
            <input
              className="align-self-end form-control"
              type="text"
              maxLength={30}
              name="neighb"
              id="neighb"
            />
          </div>
          <div className="p-2 d-flex flex-column">
            <label className="align-self-start"> Cidade </label>
            <input
              className="align-self-end form-control"
              type="text"
              maxLength={30}
              name="city"
              id="city"
            />
          </div>
          <div className="p-2 d-flex flex-column">
            <label className="align-self-start"> Estado </label>
            <input
              className="align-self-end form-control"
              type="text"
              maxLength={30}
              name="state"
              id="state"
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <h4 className="bg-success text-white">Insureds Info</h4>
          <this.Secureds />
        </div>
        <div className="shadow p-3 mb-5 bg-white rounded">
          <h4 className="bg-success text-white">Contact Info</h4>
          <this.Contact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log("STATE UserDataForm");
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
