import React from 'react';
import MenIndexItem from './men_index_item';

class MenIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const men = products.filter(product => product.gender === 'M');

        return (
            <div>
                <div className='index'>
                    <h1>Men's:</h1>
                    {men.map(product => <MenIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default MenIndex;