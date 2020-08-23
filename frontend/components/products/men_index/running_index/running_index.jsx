import React from 'react';
import RunningIndexItem from './running_index_item';

class RunningIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const running = products.filter(product => product.gender === "Men's" && product.category === 'Running');


        return (
            <div className='index-body'>
                <div className='product-filter'>
                    <div>
                        <div className='mini-header'>Mens' / Shoes</div>
                        <div className='max-header'>Running Shoes</div>
                    </div>

                    <div className='sort'>
                        <div className='collection-sort'>
                            <div>Filter</div>
                        </div>
                    </div>
                </div>

                <div className='products'>
                    {running.map(product => <RunningIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default RunningIndex;