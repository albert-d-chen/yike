import React from 'react';
import WomenIndexItem from './women_index_item';

class WomenIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const women = products.filter(product => product.gender === "Women's");

        return (
            <div className='index-body'>
                <div className='product-filter'>
                    <div>
                        <div className='mini-header'>Women's / Shoes</div>
                        <div className='max-header'>All Shoes</div>
                    </div>

                    <div className='sort'>
                        <div className='collection-sort'>
                            <div>Filter</div>
                        </div>
                    </div>
                </div>

                <div className='products'>
                    {women.map(product => <WomenIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default WomenIndex;