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

    const res = await fetch("clientAccountGroups");
    const data = await res.json();

    setCards(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Cards</h4>
      </li>
      {!loading && cards.length === 0 ? (
        <p className="center">No cards to show...</p>
      ) : (
        cards.map((card) => <li>{card.status}</li>)
      )}
    </ul>
  );
};

export default Cards;
