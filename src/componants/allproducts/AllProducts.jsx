import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/Header";
import "./products.css";
import Card from "../cards/Cards";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [cardProducts, setCardProducts] = useState([]);
  const [addCartProduct, setAddCartProduct] = useState([]);

  const navigate = useNavigate();

  const GetAllProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts(response.data);
    } catch (error) {
      alert(`${error}`);
    }
  };

  const GetCardProduct = async () => {
    const response = await axios.get("/cart");
    setCardProducts(response.data);
  };

  const AddToCard = async (e, product) => {
    e.preventDefault();
    try {
      await axios.post("/cart", {
        productId: product._id,
        qty: 1,
      });
    } catch (error) {
      alert(`${error}`);
    }
    GetCardProduct();
  };

  const PlaceOrders = () => {
    navigate("/qkart/place/orders");
  };

  useEffect(() => {
    const result = cardProducts.map(({ productId }) =>
      products.find((obj) => obj._id === productId)
    );
    setAddCartProduct(result);
  }, [cardProducts]);

  useEffect(() => {
    GetAllProducts();
    GetCardProduct();
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-9">
            {products.map((product) => {
              return (
                <div
                  key={product._id}
                  className="product-card mx-md-2 d-inline-block mb-2"
                >
                  <img
                    className="card-img-top"
                    src={product.image}
                    height="200px"
                    alt="Card image cap"
                  />
                  <div>
                    <h5>{product.category}</h5>
                    <p className="card-text">{product.cost}</p>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => AddToCard(e, product)}
                    >
                      Add To Card
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col">
            <Card data={addCartProduct} />
            <button className="btn btn-primary" onClick={() => PlaceOrders()}>
              cheakout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
