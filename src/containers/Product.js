import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, image, price, category } = product;
  return (
    <div className="four wide column ">
      <Link to={`/product/${id}`}>
        <div className="ui cards link">
          <div className="card">
            <div class="content">
              <img className="ui image" src={image} alt={title}></img>
            </div>

            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price "> $ {price}</div>
              <div className="meta  "> {category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
