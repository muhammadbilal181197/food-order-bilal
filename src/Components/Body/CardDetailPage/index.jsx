import React from "react";
import { useParams } from "react-router-dom";
import Card from "../Restaurant-Card/Card";
import { cardsData } from "../../../Data/CardsData";
const CardDetailPage = () => {
  const { id } = useParams();
  const cardStyle = {
    backgroundColor: "#34495e",
    borderRadius: "5px",
    padding: "10px",
    width: "100%",
    maxWidth: "500px",
  };

  const card = cardsData.find((card) => card.id === Number(id));

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "white" }}>Card Detail Page</h2>
      {card ? (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            style={cardStyle}
            key={card.id}
            icon={card.icon}
            id={card.id}
            name={card.name}
            description={card.description}
            price={card.price}
          />
        </div>
      ) : (
        <p>Card not found.</p>
      )}
    </div>
  );
};

export default CardDetailPage;
