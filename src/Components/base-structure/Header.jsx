import React, { useContext, useState } from "react";
import Logo from "../../assets/base-structure/Logo.png";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SearchIcon from "@mui/icons-material/Search";
import * as styles from "./header.module.scss";
import CardContext from "../../utils/CardContext";
import { Navbar, Container, Nav, Badge, Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import User from "../User";

const Header = ({}) => {
  const {
    cartItems,
    totalPrice,
    // handleRemoveFromCart,
    searchTerm,
    handleSearch,
  } = useContext(CardContext);

  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const state = useSelector((state) => state.amount);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
        <div className={styles.search}>
          <SearchIcon />
          <input
            style={{ color: "white" }}
            type="text"
            placeholder="Search the Item"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className={styles.cartblock}>
          <ShoppingCartCheckoutIcon
            style={{ color: "white" }}
            onClick={handleShow}
          />
          <p className={styles.cart} style={{ color: "white" }}>
            {cartItems.length}
          </p>
          <Button disabled={true}>Items :{state}</Button>
          <Modal
            show={showCart}
            onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Title style={{ textAlign: "Center" }}>
              Cart Selected Items
            </Modal.Title>
            <Modal.Body>
              {cartItems.length === 0 ? (
                <p>No items in cart</p>
              ) : (
                <>
                  {cartItems.map((card) => (
                    <div key={card.id} className={styles.cardblock}>
                      <img
                        src={card.icon}
                        className={styles.icon}
                        style={{ height: "100px", width: "100px" }}
                      />
                      <p>{`Food Name: ${card.name} || Food Price: ${card.price}`}</p>
                      <p></p>
                    </div>
                  ))}
                  <p>Total Price: {totalPrice}</p>

                  {/* <button onClick={handleRemoveFromCart}>Remove Last</button> */}
                </>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <User />
      </div>
    </>
  );
};

export default Header;
