import * as CartItemAPIUTIL from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';

export const receiveCartItems = payload => (
    {
        type: RECEIVE_CART_ITEMS,
        payload
    }
)

export const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem 
})


export const removeCartItem = cartItem => ({
    type: DELETE_CART_ITEM,
    cartItem
})


export const fetchCartItems = () => dispatch => (
    CartItemAPIUTIL.fetchCartItems()
        // .then(payload => console.log(payload))
        .then(payload=> dispatch(receiveCartItems(payload)))
)

export const fetchCartItem = (cartItemId) => dispatch => {
    return (
        CartItemAPIUTIL.fetchCartItem(cartItemId) 
            .then(cartItem => dispatch(receiveCartItem(cartItem)))

    )
}

export const createCartItem = cartItem => dispatch => (
    CartItemAPIUTIL.createCartItem(cartItem)
        .then(createdCartItem => dispatch(receiveCartItem(createdCartItem)) )
)

export const deleteCartItem = cartItemId => dispatch => (
    CartItemAPIUTIL.deleteCartItem(cartItemId)
        .then(cartItem => dispatch(removeCartItem(cartItem)) )
)


export const updateCartItem = cartItemId => dispatch => {
    return (
        CartItemAPIUTIL.updateCartItem(cartItemId)
            .then(cartItemId => dispatch(receiveCartItem(cartItemId)))
    )
}