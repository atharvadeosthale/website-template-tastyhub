import React from "react";
import "./Product.css";

function Product({ image, name, description }) {
  return (
    <div className="product">
      <img src={image} alt={name} className="product__image" />
      <div className="product__details">
        <div className="product__name">{name}</div>
        <div className="product__description">{description}</div>
      </div>
    </div>
  );
}

export default Product;
