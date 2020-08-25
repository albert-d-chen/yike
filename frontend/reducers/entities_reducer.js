import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import cartItemsReducer from './cart_items_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cartItems: cartItemsReducer
})

export default entitiesReducer;

