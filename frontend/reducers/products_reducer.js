import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from '../actions/product_actions'
import {RECEIVE_CART_ITEMS} from '../actions/cart_items_actions'

const productsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PRODUCT:
            return {[action.product.id]: action.product}
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, action.products)
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, state, action.payload.products)
        default:
            return state;
    }
}

export default productsReducer;
