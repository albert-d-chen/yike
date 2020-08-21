import React from 'react';
import WomenIndexItem from './women_index_item';

class WomenIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const women = products.filter(product => product.gender === 'F');

        return (
            <div>
                <div className='index'>
                    <h1>Women's:</h1>
                    {women.map(product => <WomenIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default WomenIndex;