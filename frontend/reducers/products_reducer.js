import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from '../actions/product_actions'

const productsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, {[action.product.id]: action.product})
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, action.products)
        default:
            return state;
    }
}

export default productsReducer;
