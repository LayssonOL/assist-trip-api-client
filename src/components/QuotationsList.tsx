import * as React from "react";
import { connect } from "react-redux";
import { IQuotation, ICoverage, IProduct } from "src/actions/actionTypes";
import BuyPlan from "./buyPlan";
import { useState, useEffect } from "react";
import IPurchaseParams from "src/interfaces/purchaseParams";

const QuotationsList = (props: any) => {
    const [goBuy, setGoBuy] = useState(false);
    const [selectedCov, setSelectedCov] = useState({});

    const bu = () => {
        return <BuyPlan />
    }

    useEffect(() => {
        bu();
    }, [goBuy])

    const handleChangeBuy = (e: React.FormEvent<HTMLFormElement>, coverage: ICoverage) => {
        e.preventDefault();
        const purchase: IPurchaseParams = {
            external_id: 0,
            plan_id: coverage.coverage_id,
            ...props.quotData,
        }
        setGoBuy(true);
    }

  if (props.quots.isFetching == false && props.quots.quotations.length > 0) {
    if (goBuy) {
        return (
            <div>
                {bu()}
            </div>
        )
    } else {
      return (
        <div>
          <ul>
            {props.quots.quotations.map((quot: IQuotation) => {
              return (
                <li key={quot.product_id}>
                  <h4>{quot.product_name}</h4>
                  {coverages(quot, handleChangeBuy)}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  } else {
    return <div className="initialPageLoading">Loading...</div>;
  }
};

const coverages = (quot: IQuotation, handleChange: any) => {
  return (
    <ul>
      {quot.coverages.map((coverage: ICoverage) => {
        return (
          <li key={coverage.coverage_id}>
            <p>{coverage.display_name_ptbr}</p>
            <p>{`Valor: ${coverage.coverage_value}`}</p>
            <button className="btn btn-primary"
            onChange={(e) => handleChange(e,coverage)}
            >Comprar</button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  //   console.log("STATE Init");
  //   console.log(state);
  return {
    prods: state.prods,
    quots: state.quots
  };
};

export default connect(
  mapStateToProps,
  null
)(QuotationsList);
