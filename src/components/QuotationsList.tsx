import * as React from "react";
import { connect } from "react-redux";
import { IQuotation, ICoverage, IProduct } from "src/actions/actionTypes";

const QuotationsList = (props: any) => {
  if (props.quots.isFetching == false && props.quots.quotations.length > 0) {
    return (
      <div>
        <ul>
          {props.quots.quotations.map((quot: IQuotation) => {
            return (
              <li key={quot.product_id}>
                <h4>{quot.product_name}</h4>
                {coverages(quot)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div className="initialPageLoading">Loading...</div>;
  }
};

const coverages = (quot: IQuotation) => {
  return (
    <ul>
      {quot.coverages.map((coverage: ICoverage) => {
        return (
          <li key={coverage.coverage_id}>
            <p>{coverage.display_name_ptbr}</p>
            <p>{`Valor: ${coverage.coverage_value}`}</p>
            <button className="btn btn-primary">Comprar</button>
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
