import React from 'react';
import BasketballIndexItem from './basketball_index_item';

class BasketballIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const basketball = products.filter(product => product.gender === "Women's" && product.category === 'Basketball');

        return (
            <div className='index-body'>
                <div className='product-filter'>
                    <div>
                        <div className='mini-header'>Women's / Shoes</div>
                        <div className='max-header'>Basketball Shoes</div>
                    </div>

                    <div className='sort'>
                        <div className='collection-sort'>
                            <div>Filter</div>
                        </div>
                    </div>
                </div>

                <div className='products'>
                    {basketball.map(product => <BasketballIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default BasketballIndex;