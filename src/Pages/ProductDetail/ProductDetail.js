import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const stockRef = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://bicycle-inventory-server.onrender.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDetail(data);
      });
  }, [detail]);

  //Quantity delete on pressing the deliver button
  const handleDeliver = () => {
    const newQuantity = detail.quantity - 1;
    // const newQuantity = parseInt(quantity)
    console.log(newQuantity);
    if (newQuantity > 0) {
      const url = `https://bicycle-inventory-server.onrender.com/products/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newQuantity }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });
    } else {
      alert("Out of stock");
    }
  };

  //Restock quantity on click
  // const handleRestock = (e) => {
  //   e.preventDefault();
  //   const itemNumber = stockRef.current.value;

  //   if (itemNumber > 0) {
  //     const newStockedQuantity = detail.quantity + parseInt(itemNumber);
  //     console.log(newStockedQuantity);

  //     const url = `https://bicycle-inventory-server.onrender.com/products/${id}`;
  //     fetch(url, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ newStockedQuantity }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);
  //       });
  //   }
  // };

  const handleManageInventory = () => {
    navigate("/warehouse");
  };

  return (
    <div className="container">
      <h1
        style={{ fontSize: "65px", color: "#1b3e41", fontWeight: "bold" }}
        className="text-center my-4"
      >
        {detail.name}
      </h1>
      <div className="d-flex justify-content-center align-item-center product-info">
        <div className="">
          <img className="product-img" src={detail.image} alt="" />
        </div>
        <div className="p-4">
          <h2 style={{ fontSize: "45px" }}>{detail.price}</h2>
          <p>{detail.description}</p>
          <h4>By: {detail.company}</h4>
          <h5>
            Available:{" "}
            <span style={{ color: "#df453e" }}>{detail.quantity}</span>
          </h5>
          <button onClick={handleDeliver} className="deliver-btn">
            Deliver
          </button>

          <div className="my-5">
            <input
              ref={stockRef}
              className="restock-input"
              type="number"
              name=""
              id=""
              placeholder="restock number"
            />
            {/* <button onClick={handleRestock} className="restock-btn">
              Restock
            </button> */}
          </div>
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleManageInventory} className="manageInventory">
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
