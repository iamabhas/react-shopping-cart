import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGlobalContext } from "../utils/context";
const Product = ({ id, title, category, price, img, desc, amount }) => {
  const [show, setShow] = useState(false);
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
  return (
    <section className="product">
      <h3>{title}</h3>
      <h4>Catergory : {category}</h4>
      <h4>Price: ${price}</h4>
      <img src={img} alt={title} />
      {show && <article>{desc}</article>}
      <div className="btn-container">
        <button
          className="details-btn btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? `Hide Details` : `Show Details`}
        </button>
        <button
          className="remove-btn btn"
          onClick={() => {
            removeItem(id);
          }}
        >
          Remove Item
        </button>
        <div className="btn-sub-container">
          <button
            className="decrease-btn btn"
            onClick={() => {
              decreaseAmount(id);
            }}
          >
            <IoIosArrowBack />
          </button>
          <h4>{amount}</h4>
          <button
            className="increase-btn btn"
            onClick={() => {
              increaseAmount(id);
            }}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Product;
