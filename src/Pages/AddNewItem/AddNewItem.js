import React from "react";
import { useForm } from "react-hook-form";

const AddNewItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };

  return (
    <div className="container text-center">
      <h1
        style={{ color: "#1b3e41", fontSize: "50px" }}
        className="mb-5 fw-bold"
      >
        Add New Item
      </h1>
      <form className="m-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Your name"
          required
        />
        <br />
        <br />
        <input
          {...register("email", { required: true, maxLength: 40 })}
          placeholder="email"
          required
        />
        <br />
        <br />
        <input
          {...register("company", { required: true, maxLength: 20 })}
          placeholder="company"
          required
        />
        <br />
        <br />
        <input
          type="number"
          {...register("quantity", { min: 1, max: 99 })}
          placeholder="quantity"
          required
        />
        <br />
        <br />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <br />
        <br />
        <input className="fw-bold" type="submit" value="Add New Item" />
        <br />
        <br />
      </form>
    </div>
  );
};

export default AddNewItem;
