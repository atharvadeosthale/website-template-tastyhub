import React from "react";
import Product from "../Product/Product";
import "./Bestsellers.css";

function Bestsellers() {
  return (
    <div className="bestsellers">
      <div className="bestsellers__header">
        <div className="bestsellers__heading">Bestsellers</div>
        <div className="bestsellers__link">
          <a href="#">Complete Menu &gt;&gt;</a>
        </div>
      </div>
      <div className="bestseller__productsContainer">
        <div className="bestseller__products">
          <Product
            name="Cheesy Pizza"
            image="https://images.unsplash.com/photo-1609159085820-d9a6ff0f469e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
            description="Pizza made specially for those cheese lovers!"
          />
          <Product
            name="Cheesy Pizza"
            image="https://images.unsplash.com/photo-1609159085820-d9a6ff0f469e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
            description="Pizza made specially for those cheese lovers!"
          />
        </div>
        <div className="bestseller__products">
          <Product
            name="Cheesy Pizza"
            image="https://images.unsplash.com/photo-1609159085820-d9a6ff0f469e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
            description="Pizza made specially for those cheese lovers!"
          />
          <Product
            name="Cheesy Pizza"
            image="https://images.unsplash.com/photo-1609159085820-d9a6ff0f469e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
            description="Pizza made specially for those cheese lovers!"
          />
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
