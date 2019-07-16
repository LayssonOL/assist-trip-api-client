import * as React from "react";
import { connect } from "react-redux";
import { IQuotation, ICoverage } from "src/actions/actionTypes";

const QuotationsList = (props: any) => {
  const quotations = props.quots.quotations;
  if (props.quots.isFetching == false && props.quots.quotations.length > 0) {
    return (
      <div>
        <ul>
          {quotations.map((quotation: IQuotation) => {
            return (
              <li key={quotation.id}>
                <h4>{quotation.name}</h4>
                {coverages(quotation)}
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

const coverages = (quotation: IQuotation) => {
  return (
    <ul>
      {quotation.coverages.map((coverage: ICoverage) => {
        if (
          coverage.display_name_ptbr.split(",")[0] == "Despesas Médicas" ||
          coverage.display_name_ptbr == "Danos às Malas"
        ) {
          return (
            <li key={coverage.id}>
              <p>{coverage.display_name_ptbr}</p>
              <p>{`Valor: ${coverage.coverage_value}`}</p>
            </li>
          );
        }
      })}
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  //   console.log("STATE Init");
  //   console.log(state);
  return {
    quots: state.quots
  };
};

export default connect(
  mapStateToProps,
  null
)(QuotationsList);
