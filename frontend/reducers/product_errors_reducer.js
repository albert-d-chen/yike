import {PRODUCT_RECEIVE_ERRORS, RECEIVE_PRODUCT} from '../actions/product_actions';


const productErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    action.errors = action.errors || [];

    switch (action.type) {
        case PRODUCT_RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_PRODUCT:
            return [];
        default:
            return state;
    }
}

export default productErrorsReducer;