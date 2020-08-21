import React from 'react';
import CasualIndexItem from './casual_index_item';

class CasualIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const casual = products.filter(product => product.gender === 'F' && product.category === 'casual');

        return (
            <div>
                <div>
                    <h1>Casual:</h1>
                    {casual.map(product => <CasualIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default CasualIndex;