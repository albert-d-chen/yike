import {RECEIVE_CART_ITEMS, DELETE_CART_ITEM, RECEIVE_CART_ITEM} from '../actions/cart_items_actions'

const cartItemsReducer = (state={}, action) => {
    Object.freeze(state);
    

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, state, action.payload.cart_items);
        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, {[action.cartItem.id]: action.cartItem})
        case DELETE_CART_ITEM:
            let newState = Object.assign({}, state);
            delete newState[action.cartItem.id];
            return newState;
        default:
            return state;
    }
}

export default cartItemsReducer;