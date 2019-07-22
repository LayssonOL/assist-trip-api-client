import * as React from "react";
import { connect } from "react-redux";
import DestList from "./destinationsList";
import { bindActionCreators } from "redux";
import * as destsActions from "../actions/destinationActions";
import * as prodsActions from "../actions/productsActions";
import * as quotsActions from "../actions/quotationActions";
import * as purchActions from "../actions/purchaseActions";
import { useState } from "react";
import IQuotationParams from "src/interfaces/quotationParams";
import QuotationsList from "./QuotationsList";
import { IProduct, ICoverage, IPurchase, IContact } from "src/actions/actionTypes";

const InitialPage = (props: any) => {
  const [selectedDest, setSelectedDest] = useState(0);
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coverages, setCoverages] = useState([0]);
  const [name, setName] = useState("Nome");
  const [email, setEmail] = useState("Email");
  const [phone, setPhone] = useState("(99) 9999-9999");

  const unifyCoverages = () => {
    let cov: number[] = [];
    getCoverages().map((vec: Array<number>) => {
      vec.map((val: number) => {
        cov.push(val);
      });
    });
    return cov;
  };

  const getCoverages = (): Array<any> => {
    return props.prods.products.map((product: IProduct) => {
      return product.coverages
        .filter((coverage: ICoverage) => {
          return (
            coverage.display_name_ptbr.split(",")[0] == "Despesas Médicas" ||
            coverage.display_name_ptbr == "Danos às Malas"
          );
        })
        .map((coverage: ICoverage) => {
          return coverage.coverage_id;
        });
    });
  };

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    console.log(unifyCoverages());
    setSelectedDest(parseInt(event.currentTarget.value));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "departure":
        setBeginDate(e.target.value);
        // console.log(`Begin Date: ${e.target.value}`);
        break;
      case "arrival":
        setEndDate(e.target.value);
        // console.log(`End Date: ${e.target.value}`);
        break;
      case "name":
        setName(e.target.value);
        // console.log(`End Date: ${e.target.value}`);
        break;
      case "email":
        setEmail(e.target.value);
        // console.log(`End Date: ${e.target.value}`);
        break;
      case "phone":
        setPhone(e.target.value);
        // console.log(`End Date: ${e.target.value}`);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contact: IContact = {
      name: name,
      email: email,
      phone: phone
    };
    const purchase: any = {
      coverage_begin: beginDate,
      coverage_end: endDate,
      destination_id: selectedDest,
      contact: contact
    };
    const params: IQuotationParams = {
      coverage_begin: beginDate,
      coverage_end: endDate,
      destination: selectedDest,
      coverages: unifyCoverages()
    };
    props.quotsActions.doQuotations(params);
    props.purchActions.receivePurchaseData(purchase);
  };

  if (props.dests.isFetching == false && props.dests.destinations.length > 0) {
    if (props.quots.isFetching == false && props.quots.quotations.length > 0) {
      // return <div className="initialPageLoading">Loading...</div>;
      return <QuotationsList quotData={{ beginDate, endDate, selectedDest }} />;
    } else {
      return (
        <div className="container">
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <div className="d-flex p-2 flex-row">
              <div className="p-2">
                <DestList
                  selectedDest={selectedDest}
                  handleChange={handleSelect}
                />
              </div>
              <div className="p-2">
                <input
                  type="date"
                  value={beginDate}
                  name="departure"
                  id="departure-date"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </div>

              <div className="p-2">
                <input
                  type="date"
                  value={endDate}
                  name="arrival"
                  id="arrival-date"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </div>
            </div>
            <div className="d-flex flex-row">
              {userDataForm(name,email,phone,handleChange)}
              <button className="d-flex flex-row btn btn-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      );
    }
  } else {
    return <div className="initialPageLoading">Loading...</div>;
  }
};

const userDataForm = (name: string, email: string, phone: string,
     handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
  return (
    <div className="d-flex flex-row align-items-center">
      <div className="col-sm">
        <input type="text" value={name} name="name" id="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
      </div>
      <div className="col-sm">
        <input type="text" value={email} name="email" id="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
      </div>
      <div className="col-sm">
        <input type="tel" value={phone} name="phone" id="phone"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
      </div>
    </div>
  );
};

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
)(InitialPage);
