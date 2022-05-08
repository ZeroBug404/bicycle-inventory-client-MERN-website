/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, image, price, quantity, company, description } = product;

  const navigate = useNavigate();
  const location = useLocation();

  const handleManage = (id) => {
    navigate(`/products/${id}`);
  };

  //   const handleManage = (id) => {
  //     const url = `https://polar-oasis-43531.herokuapp.com/products/${id}`;
  //     // console.log(url);
  //     // axios.get(url)
  //     // .then(function (response) {
  //     //   // handle success
  //     //   console.log(response);
  //     // });
  //   };

  return (
    <div className="product">
      <div style={{ width: "100%", background: "white" }}>
        <img src={image} alt="" />
        <div className="p-4">
          <h4 style={{ color: "#1b3e41", fontWeight: "bold" }}>{name}</h4>
          <h5 className="text-danger">{price}</h5>
          <p>Available: {quantity}</p>
          <p>Company: {company}</p>
          <p>{description}</p>
          {/* <button onClick={handleManage} className='productManageBtn'>Manage</button> */}
          <Link
            onClick={() => handleManage(_id)}
            className="productManageBtn"
            to={`/products/${_id}`}
          >
            Manage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
