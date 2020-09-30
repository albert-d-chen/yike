import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import cartItemsReducer from './cart_items_reducer';
import searchProductReducer from './search_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cartItems: cartItemsReducer,
    searchProducts: searchProductReducer,
    reviews: reviewsReducer
})

export default entitiesReducer;

