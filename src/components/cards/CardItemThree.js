import React from "react";
import PropTypes from "prop-types";

const CardItemThree = ({ card }) => {
  return (
    <div className="container">
      <a href="#!">{card.status}</a>
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
        <div className="state-percentage">
          <svg className="percentage" viewbox="0 0 52 52">
            <circle cx="50" cy="50" r="45" fill="#fff" />
            <path
              fill="none"
              stroke-linecap="round"
              stroke-width="5"
              stroke="#f59a1b"
              stroke-dasharray="125.6,125.6"
              d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"
            />
            <text x="50" y="50" text-anchor="middle" dy="7" font-size="20">
              {card.percentageComplete}%
            </text>
          </svg>
          <div className="state-app">
            <p className="app-info">
              Almost there! <strong>{card.percentageComplete}% </strong>done
              with your application
            </p>
            <hr />
            <p className="app-info-1">
              Pick up where you left off or
              <button className="btn-cancel">
                CANCEL
                <i className="fas fa-times-circle" />
              </button>
            </p>
          </div>
        </div>

        <div className="second-section">
          <hr />
          <p className="updated">
            Last updated: <p className="updated-date">{card.updatedDate}</p>
          </p>
          <p className="updated">
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
