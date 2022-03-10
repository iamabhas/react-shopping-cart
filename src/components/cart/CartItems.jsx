import React from "react";
import { useGlobalContext } from "../utils/context";
import Product from "./CartItem";
import Underline from "../utils/line";
const CartContainer = () => {
  const { products, total, clearItems } = useGlobalContext();
  if (products.length === 0) {
    return (
      <main className="products-container">
        <header>Your Cart</header>
        <h2 className="empty-warning">Cart is empty !</h2>;
      </main>
    );
  }
  return (
    <main className="products-container">
      <header>Your Cart</header>
      <h6>Project is not mobile responsive !</h6>
      {products.map((product) => {
        return <Product {...product} key={product.id} />;
      })}
      <Underline />
      <div className="total">
        <p>Total : </p>
        <section>${total}</section>
      </div>
      <button className="btn clear-btn" onClick={clearItems}>
        Clear Cart
      </button>
    </main>
  );
};
export default CartContainer;
