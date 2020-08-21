import React from 'react';
import { Link } from 'react-router-dom';

const MenIndexItem = ({ product }) => {
    return (
        <div key={product.id}>
            <ul>
                <Link to={`/products/${product.id}`}>{product.product_name}</Link>
                <img src={product.photo} height='200px' width='200px' />
                <li>{product.category}</li>
                <li>{product.price}USD</li>
            </ul>
        </div>
    )
}

export default MenIndexItem;