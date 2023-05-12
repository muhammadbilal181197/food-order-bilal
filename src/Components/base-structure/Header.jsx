import React, { useContext } from "react";
import Logo from "../../assets/base-structure/Logo.png";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import * as styles from "./header.module.scss";
import CardContext from "../../utils/CardContext";


const Header = ({}) => {
  const { searchTerm, handleSearch } = useContext(CardContext);
  const { cartItems } = useContext(CardContext);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
        <div className={styles.search}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search the Item"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>
          <PersonIcon />
          <p>Cart: {cartItems.length}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
