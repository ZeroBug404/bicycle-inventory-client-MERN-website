import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../Product/Product";
import "./Inventory.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://bicycle-inventory-server.onrender.com/products")
      .then((response) => {
        const res = response.data;
        const sliced = res.slice(0, 6);
        setProducts(sliced);
      });
  }, []);

  const handleManageInventory = () => {
    navigate("/warehouse");
  };

  return (
    <div style={{ backgroundColor: "#f0f2f2" }}>
      <div className="container text-center">
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

        {/* <Link className="manageInventory" to={'/warehouse'}>Manage Inventory</Link> */}
        <button onClick={handleManageInventory} className="manageInventory">
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Inventory;
