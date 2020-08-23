import React from 'react';
import {Link} from 'react-router-dom';

const ProductIndexItem = ({product}) => {
    
    return (
        <div key={product.id} className='product-card'>
            <div className='product-image'>
                <Link to={`/products/${product.id}`}><img className='image' src={product.photoUrls ? product.photoUrls[0] : null} ></img></Link>
            <div className='product-info'>
                <div className='product-price'>
                    <Link to={`/products/${product.id}`} className='index-link'>{product.product_name}</Link>
                    <div>${product.price}</div> 
                </div>
                <div className='product-category'>{product.gender}&nbsp;{product.category}</div> 
            </div>
            </div>
        </div>
    )
}

export default ProductIndexItem;


