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
        let filteredItems = this.availableSearches();

        let filtered;
        if (this.state.search.length === 0) {
            filtered = this.state.defaultSearch.map((item, idx) => {
                let filterClass = this.state.defaultSearch.indexOf(item) !== 5 ? 'search-link' 
                                  : this.state.defaultSearch.indexOf(item) === 0 ? 'first-search-link'
                                  : 'last-search-link' ;
                return (
                    <div key={idx} className='search-default'>
                        {item === "Men's Basketball Shoes" ? <Link to={`/mensbasketball`} className={filterClass}>{item}</Link> 
                        : item === "Men's Running Shoes" ? <Link to={`/mensrunning`} className={filterClass}>{item}</Link>
                        : item === "Men's Casual Shoes" ? <Link to={`/menscasual`} className={filterClass}>{item}</Link>
                        : item === "Women's Basketball Shoes" ? <Link to={`/womensbasketball`} className={filterClass}>{item}</Link>
                        : item === "Women's Running Shoes" ? <Link to={`/womensrunning`} className={filterClass}>{item}</Link>
                        :  <Link to={`/womenscasual`} className={filterClass}>{item}</Link>}
                    </div>
                )
            })
            // return null;
        } else if (filteredItems.length === 0) {
            return (
              <div className='search-default'>
                <Link to='/products' className='first-search-link' onClick={this.clearInput}>No Results Found...</Link>
              </div>
            );
        } else {
            filtered = (
                filteredItems.map((product, idx) => {
                    let filterClass = filteredItems.indexOf(product) !== filteredItems.length - 1 ? 'search-link' 
                                    : filteredItems.indexOf(product) === 0 ? 'first-search-link' 
                                    : 'last-search-link' ;
                    return (
                      <div key={idx} className='search-default'>
                          {typeof product === 'string' && product === "Men's Basketball Shoes" ? <Link to={`/mensbasketball`} className={filterClass}>{product}</Link> 
                          : typeof product === 'string' && product === "Men's Running Shoes" ? <Link to={`/mensrunning`} className={filterClass}>{product}</Link>
                          : typeof product === 'string' && product === "Men's Casual Shoes" ? <Link to={`/menscasual`} className={filterClass}>{product}</Link>
                          : typeof product === 'string' && product === "Women's Basketball Shoes" ? <Link to={`/womensbasketball`} className={filterClass}>{product}</Link>
                          : typeof product === 'string' && product === "Women's Running Shoes" ? <Link to={`/womensrunning`} className={filterClass}>{product}</Link>
                          : typeof product === 'string' && product === "Women's Casual Shoes" ? <Link to={`/womenscasual`} className={filterClass}>{product}</Link>
                          : <Link to={`/products/${product.id}`} onClick={this.clearInput} className={filterClass}>{product.product_name}</Link>}
                       
                      </div>
                    );
                })
            )
        }
        return filtered;
    }

    availableSearches () {
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

        filteredItems = filteredItems.slice(0, 6);
        return filteredItems;
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
        let filtered = this.availableSearches();
        if (filtered.length > 0) {
            let searchFocus = filtered[0];
            if (typeof searchFocus === 'string') {
                 this.setState({search: '', showDropdown: false}, () => {
                    if (searchFocus === "Men's Basketball Shoes") {
                        this.props.history.push(`/mensbasketball`)
                    } else if (searchFocus === "Men's Running Shoes") {
                        this.props.history.push(`/mensrunning`)
                    } else if (searchFocus === "Men's Casual Shoes") {
                        this.props.history.push(`/menscasual`);
                    } else if (searchFocus === "Women's Basketball Shoes") {
                        this.props.history.push(`/womensbasketball`);
                    } else if (searchFocus === "Women's Running Shoes") {
                        this.props.history.push(`/womensrunning`);
                    } else {
                        this.props.history.push(`/womenscasual`);
                    }
            })
        } else {
            this.setState({search: '', showDropdown:false}, () => {
                this.props.history.push(`/products/${searchFocus.id}`)
            })
        }
    }}

    render() {

        const dropdownStyle = this.state.showDropdown ? 'search-dropdown'  : '';

        return (
            <div className='search-bar-container'>
                <form id='test' onSubmit={this.handleSubmit}>
                    <i className="fas fa-search search-image"></i>
                    <input type="text" onChange={this.handleInput()} onClick={this.openDropdown} value={this.state.search} className='search-input'></input>
                    <ul className={dropdownStyle}>
                        {this.state.showDropdown ? this.checkFiltered() : null}
                    </ul>
                </form>
            </div>
        )
    }
}

export default SearchProducts;