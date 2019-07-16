import * as React from "react";
import { connect } from "react-redux";
import DestList from "./destinationsList";
import { bindActionCreators } from "redux";
import * as destsActions from "../actions/destinationActions";
import * as prodsActions from "../actions/productsActions";
import * as quotsActions from "../actions/quotationActions";
import { useState } from "react";
import IQuotationParams from "src/interfaces/quotationParams";
import QuotationsList from "./QuotationsList";
import { IProduct, ICoverage } from "src/actions/actionTypes";

const InitialPage = (props: any) => {
  const [selectedDest, setSelectedDest] = useState(0);
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coverages, setCoverages] = useState([0]);

  const unifyCoverages = () => {
      let cov: number[] = [];
      getCoverages().map((vec: Array<number>) => {
        vec.map((val: number) => {
            cov.push(val)
        })
      })
      return cov;
  }

  const getCoverages = (): Array<any> => {
    return props.prods.products.map((product: IProduct) => {
        return product.coverages.filter((coverage: ICoverage) => {
            return (
                coverage.display_name_ptbr.split(",")[0] == "Despesas Médicas" ||
                coverage.display_name_ptbr == "Danos às Malas"
            );
        }).map((coverage: ICoverage) => {
            return coverage.coverage_id;
        })
    });
  }

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    console.log(unifyCoverages())
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
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params: IQuotationParams = {
      coverage_begin: beginDate,
      coverage_end: endDate,
      destination: selectedDest,
      coverages: unifyCoverages()
    };
    props.quotsActions.doQuotations(params);
  };

  if (props.dests.isFetching == false && props.dests.destinations.length > 0) {
    if (props.quots.isFetching == false && props.quots.quotations.length > 0) {
        // return <div className="initialPageLoading">Loading...</div>;
        return ( 
            <QuotationsList quotData={{beginDate, endDate, selectedDest}} />
        );
    } else {
      return (
        <div className="formContainer">
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <DestList selectedDest={selectedDest} handleChange={handleSelect} />
            <br />
            <div className="formDates">
              <input
                type="date"
                value={beginDate}
                name="departure"
                id="departure-date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
              />
              <input
                type="date"
                value={endDate}
                name="arrival"
                id="arrival-date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
              />
              <button className="btn btn-primary" type="submit">
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

const mapStateToProps = (state: any) => {
  console.log("STATE Init");
  console.log(state);
  return {
    dests: state.dests,
    prods: state.prods,
    quots: state.quots
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    destsActions: bindActionCreators(destsActions, dispatch),
    prodsActions: bindActionCreators(prodsActions, dispatch),
    quotsActions: bindActionCreators(quotsActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialPage);
