import * as React from "react";
import Food from "../../../assets/Body/Restaurant-Card/food-one.jpg";
import * as styles from "./card.module.scss";
import { useContext } from "react";
import CardContext from "../../../utils/CardContext";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, icon, name, price, description, style } = props;
  const { handleAddToCart } = useContext(CardContext);

  const handleClick = () => {
    handleAddToCart(props);
  };

  const dispatch = useDispatch();

  return (
    <div className={styles.wrap}>
      <div className={styles.outer} style={style}>
        <Link
          key={id}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          to={`/cards/${id}`}
        >
          <img src={icon} alt="" className={styles.icon} />
          <h2 className={styles.heading}>{name}</h2>
          <p className={styles.tagline}>{description}</p>
          <h3 style={{ color: "white" }}>Rs: {price}</h3>
        </Link>

        <div className={styles.btnblock}>
          <button onClick={handleClick} className={styles.btn}>
            Add to Cart
          </button>
          <div className={styles.btns}>
            <Button
              className={styles.btnbtn}
              onClick={() => dispatch(actionCreators.removetoCart(1))}
            >
              -
            </Button>
            <Button
              className={styles.btnbtn}
              onClick={() => dispatch(actionCreators.addtoCart(1))}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
