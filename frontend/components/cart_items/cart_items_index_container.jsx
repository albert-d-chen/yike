import {connect} from 'react-redux';
import {fetchCartItems, fetchCartItem, deleteCartItem, createCartItem, updateCartItem} from '../../actions/cart_items_actions';
import CartItems from './cart_items_index';
import {selectProductsInCart} from '../../reducers/selectors';

const mapSTP = ({session, entities:{cartItems, products}}) => ({
    userCartItems: selectProductsInCart(cartItems, products),
    products: products,
    cartItems: cartItems,
    currentUserId: session.id
})

const mapDTP = dispatch => ({
    // fetchCartItem: (cartItemId) => dispatch(fetchCartItem(cartItemId)),
    fetchCartItems: () => dispatch(fetchCartItems()),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
    updateCartItem: (updatedCartItem) => dispatch(updateCartItem(updatedCartItem)),
    fetchCartItem: (cartItemId) => dispatch(fetchCartItem(cartItemId))
})

export default connect(mapSTP, mapDTP)(CartItems);