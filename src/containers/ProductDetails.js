import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);

  console.log("product ", product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") fetcProductByID();

    return () => {
      dispatch(removSelectedProduct());
    };
  }, []);

  const fetcProductByID = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));

    dispatch(selectedProduct(response.data));
  };
  const { id, title, image, price, category } = product;

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...loading</div>
      ) : (
        <>
          <h1>Product Details</h1>

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
        </>
      )}
    </div>
  );
};

export default ProductDetails;
