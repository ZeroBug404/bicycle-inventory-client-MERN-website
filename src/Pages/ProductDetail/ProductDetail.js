import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const url = `https://polar-oasis-43531.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[id])

    return (
        <div>
            <h1>This is product detail{detail.name}</h1>
        </div>
    );
};

export default ProductDetail;