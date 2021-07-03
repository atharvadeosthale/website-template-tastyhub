import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero p-5 md:pl-36 md:pr-36">
      <div className="hero__main w-full rounded-3xl">
        <div className="hero__container">
          <div className="hero__heading ">Hungry?</div>
          <div className="hero__description">
            Get delicious food delivered to your home!
          </div>
          <button className="hero__button">Order Now!</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
