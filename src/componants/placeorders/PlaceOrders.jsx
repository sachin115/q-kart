import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import Header from "../header/Header";
const PlaceOrders = () => {
  const [cartData, setCartData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [card, setCard] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState("");

  const balance = localStorage.getItem("balance");

  const AllProducts = async () => {
    const response = await axios.get("/products");
    setProductData(response.data);
  };

  const AllCartProduct = async () => {
    const response = await axios.get("/cart");
    setCartData(response.data);
  };

  const GetAddress = async () => {
    const response = await axios.get("/user/addresses");
    setAddresses(response.data);
  };

  const AddNewAddress = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/addresses", { address });
    } catch (error) {
      console.log(error);
    }
    GetAddress();
  };

  const DeleteAddress = async (_id) => {
    await axios.delete(`/user/addresses/${_id}`);
    GetAddress();
  };

  useEffect(() => {
    AllProducts();
    AllCartProduct();
    GetAddress();
  }, []);

  useEffect(() => {
    const result = cartData.map(({ productId }) =>
      productData.find((product) => productId === product._id)
    );
    console.log("result", result);
    setCard(result);
  }, [cartData]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="spring">
              <h1>Shipping</h1>
              <hr />
              <br />
              <p>
                Manage all the shipping addresses you want (work place, home
                address) This way you won't have to enter the shipping address
                manually with each order.
              </p>
              <div className="address-section">
                {!addresses.length ? (
                  <div className="cheakout-row" style={{ color: "red" }}>
                    No addresses found. Please add one to proceed.
                  </div>
                ) : (
                  addresses.map((add) => {
                    return (
                      <div>
                        <textarea key={add._id} style={{ width: "70%" }}>
                          {add.address}
                        </textarea>
                        <div>
                          <button
                            className="btn-primary"
                            onClick={() => DeleteAddress(add._id)}
                          >
                            delete
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
                <br />
                <div>
                  <textarea
                    placeholder="Add New Address"
                    style={{ width: "70%" }}
                    rows="4"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                  <br />
                  <button
                    className="btn-primary"
                    onClick={(e) => AddNewAddress(e)}
                  >
                    Add New Address
                  </button>
                  <div>
                    <h1>Pricing</h1>
                    <h4>Payment Method</h4>
                    <div>
                      <span>{`Wallet ₹${balance} available`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Cards data={card} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrders;
