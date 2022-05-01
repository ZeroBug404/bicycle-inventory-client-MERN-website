import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import "./Inventory.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://polar-oasis-43531.herokuapp.com/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#f0f2f2" }}>
      <div className="container">
        <h2
          style={{ color: "#1b3e41", fontSize: "50px", fontWeight: "bold" }}
          className="text-center py-5"
        >
          From the Inventory
        </h2>
        <div className="products">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
