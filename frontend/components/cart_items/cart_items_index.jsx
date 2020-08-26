import React from 'react';
import {Link} from 'react-router-dom';

class CartItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            quantity: 1
        }
        this.inCart = this.inCart.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(idx){
        event.preventDefault();
        // this.setState({['id']: idx})
        let updatedItem = {id: idx, quantity: event.target.value};
        // updatedItem[id] = idx;
        // updatedItem[quantity] = event.target.value;

        // this.setState({['quantity']: event.target.value, id: idx})

        this.props.updateCartItem(updatedItem);
    }

    inCart() {
        let itemsIndex = Object.keys(this.props.userCartItems)//these are our product ids
        let items = Object.values(this.props.userCartItems);//these are our product objects
       
        let cartItemIds = Object.keys(this.props.cartItems);//these are cart item ids 
        let cartItems = Object.values(this.props.cartItems);//these are cart item objects (quantity)
                
        let fullProducts = cartItemIds.map(itemid => {
                let productId = this.props.cartItems[itemid].product_id;
                
                return (
                <div>
                <div>{this.props.products[productId].product_name}</div>

                <div className='quantity-select' key={itemid}>
                    <select onChange={(() => { this.handleChange(itemid) })} value={this.props.cartItems[itemid].quantity}>Quantity
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
                    <button onClick={() => { window.location.reload(false); this.props.deleteCartItem(itemid); }}>Delete Item</button>
                </div>
                </div>
        )})
        
        
        
        return (
            <div className='cart-items'>
                <div>Cart Items</div>
                {fullProducts}
            </div>
        )
    }

    emptyCart() {
        return (
            <div className='cart-empty'>
                Your Shopping Cart is empty.
            </div>
        )
    }

    render() {
        //    return(
        //        <div className='cart-container'>
        //            <h1>Cart Items</h1>
        //            {this.inCart()}
        //        </div>
    
        //    )
        return (this.props.userCartItems.length === 0 && this.props.currentUserId !== null) ? this.emptyCart() : this.inCart();
    }
}

export default CartItems;