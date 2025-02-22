import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () =>  {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <div className="checkoutProduct">
      <img
        src={image}
        alt=""
        className="checkoutProduct_image"
      />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <p className="checkoutProduct_rating">
            {Array.from({ length: rating }, (_, i) => (
              <span key={i}>🌟</span>
            ))}
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
