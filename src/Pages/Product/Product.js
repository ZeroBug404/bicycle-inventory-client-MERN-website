/* eslint-disable no-unused-vars */
import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {id, name, image, price, quantity, company, description} = product;
    

    return (
        <div className='product'>
            <div style={{width: '100%', background: 'white'}}>
                <img src={image} alt="" />
                <div className='p-4'>
                    <h4 style={{color: '#1b3e41', fontWeight: 'bold'}}>{name}</h4>
                    <h5 className='text-danger'>{price}</h5>
                    <p>Available: {quantity}</p>
                    <p>Company: {company}</p>
                    <p>{description}</p>
                    <button className='productManageBtn'>Manage</button>
                </div>
            </div>
        </div>
    );
};

export default Product;