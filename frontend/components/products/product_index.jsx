import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    componentDidMount(){
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;

        return (
            <div className='test'>
                <h1>All:</h1>
                {products.map(product => <ProductIndexItem key={product.id} product={product}/>)}
            </div>
        )
    }
}

export default ProductIndex;