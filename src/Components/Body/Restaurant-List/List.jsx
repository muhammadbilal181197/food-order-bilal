import React, { useContext } from "react";
import Card from "../Restaurant-Card/Card";
import * as styles from "./list.module.scss";
import CardContext from "../../../utils/CardContext";

const Cards = () => {
  const { filteredCards } = useContext(CardContext);


  return (
    <div className={styles.wrap}>
      {filteredCards.length  ? (
        filteredCards.map((value, i) => (
          <Card
            key={i}
            name={value.name}
            description={value.description}
            price={value.price}
          />
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Cards;
