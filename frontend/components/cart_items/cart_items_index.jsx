import React from 'react';
import {Link} from 'react-router-dom';

class CartItems extends React.Component {
    constructor(props) {
        super(props);
        this.inCart = this.inCart.bind(this);
    }


    componentDidMount() {
        this.props.fetchCartItems();
    }
    //userCartItems: Object.values(cartItems)

    componentDidUpdate(prevProps) {
        if (Object.values(prevProps.userCartItems).length !== Object.values(this.props.userCartItems).length){
            this.props.fetchCartItems();
        }
    }

    // componentWillUnmount(){
    //     this.props.fetchCartItems();
    // }

    update(field) {
        return (
            e => this.setState({[field]: e.currentTarget.value})
        )
    }

    inCart() {
        let itemsIndex = Object.keys(this.props.userCartItems)
        let items = Object.values(this.props.userCartItems);
        debugger
        return (
            <div>
                {itemsIndex.map(idx => (
                    <div>
                        {/* {items.map(item => ( */}
                            <div>
                                <div>{this.props.userCartItems[idx].product_name}</div>
                            </div>
                        {/* ))} */}

                        <div className='quantity-select'>
                                <select onChange={this.update('quantity')} value={this.props.quantity}>Quantity
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                        </div>

                        <button onClick={()=> this.props.deleteCartItem(idx)}>Delete Item</button>
                    </div>
                
                ))}
                


            </div>
        )
    }
    render() {
        return(
            <div className='cart-container'>
                <h1>Cart Items</h1>
                {this.inCart()}
            </div>

        )

    }
}

export default CartItems;