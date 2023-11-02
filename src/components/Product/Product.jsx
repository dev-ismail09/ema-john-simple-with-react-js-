import React, { useState } from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, price, quantity, ratings, seller} = props.product;
    return (
        <div className='product-style'>
            <img src={img} alt="not found" />
            <div className='product-info'>
            <h6>{name}</h6>
            <h6>Price: ${price}</h6>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} star</p>
            </div>
            <button className='product-button'>Add To Cart</button>

        </div>
    );
};

export default Product;