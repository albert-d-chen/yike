import React from 'react';
import SearchItem from './search_item';
import { Link } from "react-router-dom";

class SearchProducts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          search: "Search",
          showDropdown: false,
          defaultSearch: [
            "Men's Basketball Shoes",
            "Men's Running Shoes",
            "Men's Casual Shoes",
            "Women's Basketball Shoes",
            "Women's Running Shoes",
            "Women's Casual Shoes",
          ],
          defaultText: "Search",
        };

        this.openDropdown = this.openDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getProducts();
    }
    componentDidUpdate() {
        if (this.props.products.length === 1) {
            this.props.getProducts();
            // this.state.search = '';
        }
    }

    handleInput(){
        return(e) => {
            this.setState({search: e.target.value})
        }
    }

    clearInput() {
        this.setState({search: 'Search'})
    }

    checkFiltered() {
        const { products } = this.props;
        
        let filteredItems = products.filter(product => {
            if (this.state.search.length === 0) {
                return false;
            }
           if (product.product_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
               return true;
           }
           
        })
        filteredItems = filteredItems.slice(0, 5);

        let filtered;
        if (this.state.search.length === 0) {
            filtered = this.state.defaultSearch.map((item, idx) => {
                return (
                    <div key={idx}>
                        {item}
                    </div>
                )
            })
            // return null;
        } else {
            filtered = (
                filteredItems.map(product => {
                    return (
                      <div key={product.id}>
                        {/* <SearchItem product={product} state={this.state}/> */}
                        <Link to={`/products/${product.id}`} onClick={this.clearInput}>
                          {product.product_name}
                        </Link>
                      </div>
                    );
                })
            )
        }
        return filtered;
    }

    openDropdown() {
        this.setState({showDropdown: true}, () => {
            document.addEventListener('click', this.closeDropdown);
            if (this.state.defaultText === this.state.search) {
                this.setState({search: ''});
            }
        })
    }

    closeDropdown() {
        this.setState({showDropdown:false}, () => {
            document.removeEventListener('click', this.closeDropdown);
            if (this.state.search === '') {
                this.setState({ search: 'Search'});
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {

        return (
            <div>
                <form id='test' action="">
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={this.handleInput()} onClick={this.openDropdown} value={this.state.search}></input>
                    <ul>
                        {this.state.showDropdown ? this.checkFiltered() : null}
                    </ul>
                </form>
            </div>
        )
    }
}

export default SearchProducts;