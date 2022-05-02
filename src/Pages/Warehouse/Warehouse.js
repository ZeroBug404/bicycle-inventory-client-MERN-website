import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Warehouse = () => {
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
      <div className="container text-center">
        <h2
          style={{ color: "#1b3e41", fontSize: "50px", fontWeight: "bold" }}
          className="text-center py-5"
        >
          Warehouse
        </h2>
        <div className="products pb-5">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        {/* <button onClick={handleManageInventory} className="manageInventory">
          Manage Inventory
        </button> */}
      </div>
    </div>
  );
};

export default Warehouse;
