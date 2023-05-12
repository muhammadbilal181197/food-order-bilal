import * as React from "react";
import Food from "../../../assets/Body/Restaurant-Card/food-one.jpg";
import * as styles from "./card.module.scss";
import { useContext } from "react";
import CardContext from "../../../utils/CardContext";

const Card = (props) => {
  const { name, price, description } = props;
  const { handleAddToCart } = useContext(CardContext);

  const handleClick = () => {
    handleAddToCart(props);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.outer}>
        <img src={Food} alt="" className={styles.icon} />
        <h2 className={styles.heading}>{name}</h2>
        <p className={styles.tagline}>{description}</p>
        <h3>Rs: {price}</h3>
        <button onClick={handleClick} className={styles.btn}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
