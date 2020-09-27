import React from 'react';
import SearchItem from './search_item';

class SearchProducts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    componentDidMount(){
        this.props.getProducts();
    }
    // componentWillUpdate() {
    //     this.props.getProducts();
    // }

    handleInput(){
        return(e) => {
            this.setState({search: e.target.value})
        }
    }

    checkFiltered() {
        const { products } = this.props;

        let filteredItems = products.filter(product => {
            if (this.state.search.length == 0) {
                return false;
            }
           if (product.product_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
               return true;
           }
           
        })
        filteredItems = filteredItems.slice(0, 5);
        let filtered;
        if (products.length === 0) {
            return null;
        } else {
            filtered = (
                filteredItems.map(product => {
                    return (
                        <div key={product.id}>
                            <SearchItem product={product}/>
                        </div>
                    )
                })
            )
        }
        return filtered;
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInput()}></input>
                <ul>
                    {this.checkFiltered()}
                </ul>
            </div>
        )
    }
}

export default SearchProducts;