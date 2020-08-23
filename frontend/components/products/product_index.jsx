import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    componentDidMount(){
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;

        return (
            <div className='index-body'>
                <div className='product-filter'>
                    <div>
                        <div className='mini-header'>All / Shoes</div>
                        <div className='max-header'>All Shoes</div>
                    </div>

                    <div className='sort'>
                        <div className='collection-sort'>
                            <div>Filter</div>
                        </div>
                    </div>
                </div>

                <div className='products'>
                    {products.map(product => <ProductIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default ProductIndex;