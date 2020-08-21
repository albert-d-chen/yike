import React from 'react';
import { Link } from 'react-router-dom';

const BasketballIndexItem = ({ product }) => {
    return (
        <div key={product.id}>
            <ul>
                <Link to={`/products/${product.id}`}>{product.product_name}</Link>
                <img src={product.photoUrls ? product.photoUrls[0] : null}></img>
                <li>{product.category}</li>
                <li>{product.price}USD</li>
            </ul>
        </div>
    )
}

export default BasketballIndexItem;