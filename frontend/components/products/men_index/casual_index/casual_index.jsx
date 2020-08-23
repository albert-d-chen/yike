import React from 'react';
import CasualIndexItem from './casual_index_item';

class CasualIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const casual = products.filter(product => product.gender === "Men's" && product.category === 'Casual');


        return (
            <div className='index-body'>
                <div className='product-filter'>
                    <div>
                        <div className='mini-header'>Men's / Shoes</div>
                        <div className='max-header'>Casual Shoes</div>
                    </div>

                    <div className='sort'>
                        <div className='collection-sort'>
                            <div>Filter</div>
                        </div>
                    </div>
                </div>

                <div className='products'>
                    {casual.map(product => <CasualIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default CasualIndex;