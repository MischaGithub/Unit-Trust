import React, { useEffect, useState } from "react";

const Cards = () => {
  // Cards State
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCards();
    //eslint-disable-next-line
  }, []);

  // Get Cards
  const getCards = async () => {
    setLoading(true);

    const res = await fetch("./data.json");
    const data = await res.json();

    setCards(data);
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s4 m4">
          <div className="card">
            <div
              className="card-image"
              style={{
                backgroundColor: "#2775c9",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54px"
                height="54px"
                viewBox="0 0 52 52"
              >
                <path
                  id="unit-trust"
                  d="M26,0A26,26,0,1,0,52,26,26,26,0,0,0,26,0Zm0,49A23,23,0,1,1,49,26,23,23,0,0,1,26,49ZM38.5,35.5a1,1,0,0,1-1,1h-23a1,1,0,0,1,0-2h23A1,1,0,0,1,38.5,35.5Zm-22-4v-5a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v5a1,1,0,0,1-1,1h-3A1,1,0,0,1,16.5,31.5Zm7,0v-10a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v10a1,1,0,0,1-1,1h-3A1,1,0,0,1,23.5,31.5Zm7,0v-15a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v15a1,1,0,0,1-1,1h-3A1,1,0,0,1,30.5,31.5Z"
                />
              </svg>
              <div className="heading">
                <span className="card-title">Unit trust</span>
                <p className="sub-heading">
                  Investor Code: <strong>TBC</strong>
                </p>
              </div>
            </div>
            <div className="card-content">
              <div className="card">
                <div className="box">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        50<span>%</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#!">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
