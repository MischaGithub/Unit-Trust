import React from "react";
import PropTypes from "prop-types";

const CardItemOne = ({ card }) => {
  // Getting the individual objects with the total unit prices
  const getUnits = card.funds.map((unitInfo) => {
    let amnt = 0;
    amnt += unitInfo.totalUnits;

    return amnt;
  });

  // Calculating the sum the values of the total unit price
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const subUnits = getUnits.reduce(reducer);

  // Return the total available for the user
  const totalAvail = card.availableMarketValue - subUnits;

  // Just rounding off the amount to a 2 decimal digit
  const customerAmount = Math.floor(totalAvail * 100) / 100;

  // Rounding off the total value
  const totalValue = Math.floor(card.availableMarketValue * 100) / 100;

  // Date format

  const date = new Date(card.inceptionDate);

  const formatteDate = date.toDateString();

  return (
    // Open card
    <div className="container">
      <div className="card">
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
        <div className="open-card">
          <div className="total-info">
            <div className="info-svg">
              <svg
                width="40px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  id="info"
                  d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm1,15H9V8h2ZM10,7a1,1,0,1,1,1-1A1,1,0,0,1,10,7Z"
                />
              </svg>
            </div>

            <p className="present">
              Total value:
              <p className="updated-date">R{totalValue}</p>
            </p>
            <p className="present">
              Total available: <p className="updated-date">R{customerAmount}</p>
            </p>
            <p className="present">
              Total funds: <p className="updated-date">{card.funds.length}</p>
            </p>

            <p
              className="present-since"
              style={{ float: "left", marginRight: "1rem" }}
            >
              Investing since:
              <p
                className="date"
                style={{ float: "right", marginLeft: "1rem" }}
              >
                {formatteDate}
              </p>
            </p>
          </div>
        </div>
        <div className="">
          <hr className="logo" />
          <button className="btn-view">View Fund</button>
        </div>
      </div>
    </div>
  );
};

CardItemOne.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardItemOne;
