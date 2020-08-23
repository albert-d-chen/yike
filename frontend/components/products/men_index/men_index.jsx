import React from 'react';
import MenIndexItem from './men_index_item';

class MenIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const men = products.filter(product => product.gender === "Men's");

        return (
            <div className='index-body'>
                <div className='product-filter'>
                    <div>
                        <div className='mini-header'>Men's / Shoes</div>
                        <div className='max-header'>All Shoes</div>
                    </div>

                    <div className='sort'>
                        <div className='collection-sort'>
                            <div>Filter</div>
                        </div>
                    </div>
                </div>

                <div className='products'>
                    {men.map(product => <MenIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default MenIndex;