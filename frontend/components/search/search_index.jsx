import React from 'react';
import SearchItem from './search_item';

class SearchProducts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            showDropdown: false,
            defaultSearch: [
                "Men's Shoes",
                "Women's Shoes",
                "Basketball Shoes",
                "Running Shoes",
                "Casual Shoes"
            ]
        }

        this.openDropdown = this.openDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    }

    componentDidMount(){
        this.props.getProducts();
    }
    // componentDidUpdate() {
    //     if (this.props.products.length === 1) {
    //         this.props.getProducts();
    //         this.state.search = '';
    //     }
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

    openDropdown() {
        this.setState({showDropdown: true}, () => {
            document.addEventListener('click', this.closeDropdown);
        })
    }

    closeDropdown() {
        this.setState({showDropdown:false}, () => {
            document.removeEventListener('click', this.closeDropdown);
        })
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" onChange={this.handleInput()} onClick={this.openDropdown} placeholder='Search'></input>
                    <ul>
                        {this.state.showDropdown ? this.checkFiltered() : null}
                    </ul>
                </form>
            </div>
        )
    }
}

export default SearchProducts;