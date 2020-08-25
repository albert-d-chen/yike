import * as CartItemAPIUTIL from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';

export const receiveCartItems = cartItems => (
    {
        type: RECEIVE_CART_ITEMS,
        cartItems
    }
)

export const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem 
})


export const removeCartItem = cartItemId => ({
    type: DELETE_CART_ITEM,
    cartItemId
})


export const fetchCartItems = () => dispatch => (
    CartItemAPIUTIL.fetchCartItems()
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
)

export const fetchCartItem = (cartItemId) => dispatch => (
    CartItemAPIUtil.fetchCartItem(cartItemId) 
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)
export const createCartItem = cartItem => dispatch => (
    CartItemAPIUTIL.createCartItem(cartItem)
        .then(createdCartItem => dispatch(receiveCartItem(createdCartItem)) )
)

export const deleteCartItem = cartItemId => dispatch => (
    CartItemAPIUTIL.deleteCartItem(cartItemId)
        .then(cartItemId => dispatch(removeCartItem(cartItemId)) )
)


export const updateCartItem = cartItemId => dispatch => (
    CartItemAPIUTIL.updateCartItem(cartItemId)
        .then(cartItemId => dispatch(removeCartItem(cartItemId)))
)