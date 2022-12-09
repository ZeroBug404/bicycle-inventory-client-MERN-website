import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./MyItem.css";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      console.log(email);
      const url = `https://bicycle-inventory-server.onrender.com/items?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getMyItems();
  }, [user]);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure?");
    const url = `https://bicycle-inventory-server.onrender.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (procced) {
          const remaining = myItems.filter((myItem) => myItem._id !== id);
          setMyItems(remaining);
        }
      });
  };

  if (myItems) {
    console.log(myItems);
  }
  return (
    <div>
      <div className="container">
        <h2
          style={{ color: "#1b3e41", fontSize: "50px", fontWeight: "bold" }}
          className="text-center py-5"
        >
          My Items
        </h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Company</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {myItems.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.company}</td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="my-1 delete-btn btn"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyItem;
