import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./Warehouse.css";

const Warehouse = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const handleDelete = (id) => {
    const procced = window.confirm('Are you sure?');
    const url = `http://localhost:5000/products/${id}`
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (procced) {
           const remaining = products.filter(product => product._id !== id)
           setProducts(remaining);
        }
      });
  };


  return (
    <div>
      <div className="container text-center">
        <h2
          style={{ color: "#1b3e41", fontSize: "50px", fontWeight: "bold" }}
          className="text-center py-5"
        >
          Warehouse
        </h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.company}</td>
                <button onClick={() => handleDelete(product._id)} className="my-1 delete-btn btn">
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

export default Warehouse;
