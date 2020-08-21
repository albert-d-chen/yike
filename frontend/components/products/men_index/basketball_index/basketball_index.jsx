import React from 'react';
import BasketballIndexItem from './basketball_index_item';

class BasketballIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const basketball = products.filter(product => product.gender === 'M' && product.category === 'basketball');

        return (
            <div>
                <div className='index'>
                    <h1>Basketball's:</h1>
                    {basketball.map(product => <BasketballIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default BasketballIndex;