import React from "react";
import { useForm } from "react-hook-form";

const AddNewItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container text-center">
        <h1 style={{color: '#1b3e41', fontSize: '50px'}} className="mb-5 fw-bold">Add New Item</h1>
      <form className="m-auto" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} placeholder='first name' required/>
        <br />
        <br />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder= 'last Name' required/>
        <br />
        <br />
        <input type={'name'} {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder= 'email' required/>
        <br />
        <br />
        <input type="number" {...register("age", { min: 5, max: 99 })} placeholder='quantity' required/>
        <br />
        <br />
        <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
        <br />
        <br />
        <input className="fw-bold" type="submit" value="Add New Item"/>
        <br />
        <br />
      </form>
    </div>
  );
};

export default AddNewItem;
