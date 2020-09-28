import React from 'react';
import {Link} from 'react-router-dom';

const SearchItem = (props) => {
    let {product} = props;
    return (
      <div>
        <Link to={`/products/${product.id}`}>{product.product_name}</Link>
      </div>
    );
}

export default SearchItem;
