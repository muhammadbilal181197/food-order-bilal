import React, { useState } from "react";
import CardContext from "./CardContext";

const CardProvider = ({ children, cards }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = cards.filter((card) =>
      card.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  const handleAddToCart = (card) => {
    setCartItems([...cartItems, card]);
    setTotalPrice(totalPrice + card.price);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((cartItems) => {
      const index = cartItems.filter((item) => item.id === id);
      const updatedItems = [...cartItems];
      const removedItem = updatedItems.splice(index, 1)[0];
      setTotalPrice((totalPrice) => totalPrice - removedItem.price);
      return updatedItems;
    });
  };
  const contextValue = {
    searchTerm,
    handleSearch,
    filteredCards,
    handleAddToCart,
    cartItems,
    handleRemoveFromCart,
    totalPrice,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};

export default CardProvider;
