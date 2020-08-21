import React from 'react';
import RunningIndexItem from './running_index_item';

class RunningIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const running = products.filter(product => product.gender === 'F' && product.category === 'running');

        return (
            <div>
                <div>
                    <h1>Running:</h1>
                    {running.map(product => <RunningIndexItem key={product.id} product={product} />)}
                </div>
            </div>
        )
    }
}

export default RunningIndex;