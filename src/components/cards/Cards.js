import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

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
    <div className="collection">
      {!loading && cards.length === 0 ? (
        <p className="center">No cards to show...</p>
      ) : (
        cards.map((card) => <CardItem card={card} key={card.productId} />)
      )}
    </div>
  );
};

export default Cards;
