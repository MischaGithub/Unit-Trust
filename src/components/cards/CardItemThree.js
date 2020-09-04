import React from "react";
import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CardItemThree = ({ card }) => {
  const percentage = 35;

  // Date format

  const date = new Date(card.updatedDate);

  const formatteDate = date.toDateString();

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <p className="heading">{card.productLabel}</p>
          <p className="sub-heading">Investor code: {card.accountGroupId}</p>
          <div className="svg">
            <svg>
              <path
                id="tax-free"
                d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23zm12.64-27.81v6.15a1 1 0 1 1-2 0v-4.07l-8.22 7.2a1 1 0 0 1-1.33 0l-5-4.41-6.3 4.2v4H37a1 1 0 0 1 0 2H13.83V16.18a1 1 0 0 1 2 0v11.67L21.66 24a1 1 0 0 1 1.22.08l4.88 4.34 7.18-6.28h-3.49a1 1 0 1 1 0-2h6.18a.71.71 0 0 1 .21 0h.17a.71.71 0 0 1 .14.1 1.18 1.18 0 0 1 .18.13s0 .09.07.13a.64.64 0 0 1 .1.18.89.89 0 0 1 .14.51z"
              />
            </svg>
          </div>
        </div>
        <div className="progress-ring">
          <div className="incomplete-com">
            <span className="incomplete-per">{card.percentageComplete}%</span>
          </div>
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.6,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `#2775c9, ${card.percentageComplete / 100})`,
              trailColor: "white",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div className="pending-app">
          <p className="app-info">
            Almost there! {card.percentageComplete}% done with your application
          </p>
          <hr />
          <p className="app-info-1">
            Pick up where your left off or
            <button className="btn-cancel">
              CANCEL
              <i className="fas fa-times-circle" />
            </button>
          </p>
        </div>

        <div className="pending-info">
          <hr />
          <p className="submitted">
            Last updated:
            <p className="updated-date">{formatteDate}</p>
          </p>
          <p className="submitted">
            Total funds: <p className="updated-date">{card.funds.length}</p>
          </p>
        </div>
        <div className="resume-app">
          <hr />
          <button className="btn-resume">RESUME APPLICATION</button>
        </div>
      </div>
    </div>
  );
};

CardItemThree.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardItemThree;
