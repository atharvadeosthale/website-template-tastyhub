import React from "react";
import "./Order.css";

function Order() {
  return (
    <div className="order p-5 md:pl-36 md:pr-36 mt-5">
      <div className="order__heading">Order Now</div>
      <div className="order__options">
        <div className="order__option">
          <div className="order__name">Order Online</div>
          <div className="order__description">
            We will redirect you to an online order service where you can place
            an order
          </div>
          <a className="order__button" href="#">
            Place Order Online
          </a>
        </div>

        <div className="order__option">
          <div className="order__name">Call us now!</div>
          <div className="order__description">
            If you don’t prefer online orders or want a personalized order, call
            us!
          </div>
          <a className="order__button" href="#">
            Call us now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Order;
