import React, { useState } from "react";
import CardContext from "./CardContext";

const CardProvider = ({ children, cards }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = cards.filter((card) =>
      card.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  const handleAddToCart = (card) => {
    setCartItems([...cartItems, card]);
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleHideCart = () => {
    setShowCart(false);
  };
  const contextValue = {
    searchTerm,
    handleSearch,
    filteredCards,
    handleAddToCart,
    cartItems,
    handleShowCart,
    handleHideCart,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};

export default CardProvider;
