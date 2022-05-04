import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "./utils/context";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <>
      <nav className="navbar">
        <div className="item-count">
          <button className="btn cart-btn">
            <FaShoppingCart className="logo" />
          </button>
          <span className="cart-count">{amount}</span>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
