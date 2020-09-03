import React from "react";
import PropTypes from "prop-types";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const CardItemOne = ({ card }) => {
  const getUnits = card.funds.map((unitInfo) => {
    let amnt = 0;
    amnt += unitInfo.totalUnits;

    return amnt;
  });

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const subUnits = getUnits.reduce(reducer);

  const totalAvail = card.availableMarketValue - subUnits;

  const customerAmount = Math.floor(totalAvail * 100) / 100;

  const totalValue = Math.floor(card.availableMarketValue * 100) / 100;

  console.log(totalValue);

  return (
    <div className="container">
      <a href="#!">{card.status}</a>
      <div className="card blue-grey darken-1">
        <div className="card-content">
          <p className="heading">{card.productLabel}</p>
          <p className="sub-heading">Investor code: {card.accountGroupId}</p>
          <div className="svg">
            <svg
              width="54px"
              height="50px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <path
                id="unit-trust"
                d="M26,0A26,26,0,1,0,52,26,26,26,0,0,0,26,0Zm0,49A23,23,0,1,1,49,26,23,23,0,0,1,26,49ZM38.5,35.5a1,1,0,0,1-1,1h-23a1,1,0,0,1,0-2h23A1,1,0,0,1,38.5,35.5Zm-22-4v-5a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v5a1,1,0,0,1-1,1h-3A1,1,0,0,1,16.5,31.5Zm7,0v-10a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v10a1,1,0,0,1-1,1h-3A1,1,0,0,1,23.5,31.5Zm7,0v-15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v15a1,1,0,0,1-1,1h-3A1,1,0,0,1,30.5,31.5Z"
              />
            </svg>
          </div>
        </div>
        <div></div>
        <div className="card-action">
          <div className="total-info">
            <p className="present">
              Last updated:
              <p className="updated-date">{totalValue}</p>
            </p>
            <p className="present">
              Total funds: <p className="updated-date">{card.funds.length}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardItemOne.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardItemOne;
