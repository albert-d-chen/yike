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
        let reversed = this.state.defaultSearch.slice().reverse();

        reversed.forEach(category => {
            if (category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                filteredItems.unshift(category);

            }
        })
// debugger
        filteredItems = filteredItems.slice(0, 6);
        let filtered;
        if (this.state.search.length === 0) {
            filtered = this.state.defaultSearch.map((item, idx) => {
                return (
                    <div key={idx}>
                        {item === "Men's Basketball Shoes" ? <Link to={`/mensbasketball`}>{item}</Link> 
                        : item === "Men's Running Shoes" ? <Link to={`/mensrunning`}>{item}</Link>
                        : item === "Men's Casual Shoes" ? <Link to={`/menscasual`}>{item}</Link>
                        : item === "Women's Basketball Shoes" ? <Link to={`/womensbasektball`}>{item}</Link>
                        : item === "Women's Running Shoes" ? <Link to={`/womensrunning`}>{item}</Link>
                        :  <Link to={`/womenscasual`}>{item}</Link>}
                        {/* {item} */}
                    </div>
                )
            })
            // return null;
        } else {
            filtered = (
                filteredItems.map((product, idx) => {

                    return (
                      <div key={idx}>
                          {typeof product === 'string' && product === "Men's Basketball Shoes" ? <Link to={`/mensbasketball`}>{product}</Link> 
                          : typeof product === 'string' && product === "Men's Running Shoes" ? <Link to={`/mensrunning`}>{product}</Link>
                          : typeof product === 'string' && product === "Men's Casual Shoes" ? <Link to={`/menscasual`}>{product}</Link>
                          : typeof product === 'string' && product === "Women's Basketball Shoes" ? <Link to={`/womensbasketball`}>{product}</Link>
                          : typeof product === 'string' && product === "Women's Running Shoes" ? <Link to={`/womensrunning`}>{product}</Link>
                          : typeof product === 'string' && product === "Women's Casual Shoes" ? <Link to={`/womenscasual`}>{product}</Link>
                          : <Link to={`/products/${product.id}`} onClick={this.clearInput}>{product.product_name}</Link>}

                        {/* <Link to={`/products/${product.id}`} onClick={this.clearInput}>
                          {product.product_name}
                        </Link> */}

                        {/* <SearchItem product={product} state={this.state}/> */}
                       
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