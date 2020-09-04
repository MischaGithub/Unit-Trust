import React from "react";
import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CardItemTwo = ({ card }) => {
  const percentage = 70;

  // Date format

  const date = new Date(card.updatedDate);

  const formatteDate = date.toDateString();

  return (
    <div className="container">
      <a href="#!">{card.status}</a>
      <div className="card ">
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
        <div className="progress-ring">
          <div className="pending-com">
            <span className="pending-per">{card.percentageComplete}%</span>
          </div>
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.65,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `#2775c9, ${card.percentageComplete / 100})`,
              trailColor: "#fff",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div className="pending-app">
          <p className="app-info">
            Well done! We have all the information we need.
          </p>
          <hr />
          <p className="app-info-1">Your investment is currently pending.</p>
        </div>

        <div className="pending-info">
          <hr />
          <p className="submitted">
            Application submitted:
            <p className="updated-date">{formatteDate}</p>
          </p>
          <p className="submitted">
            Total funds: <p className="updated-date">{card.funds.length}</p>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

CardItemTwo.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardItemTwo;
