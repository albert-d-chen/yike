import {combineReducers} from 'redux';
import signupErrorsReducer from './signup_errors_reducer';
import loginErrorsReducer from './login_errors_reducer';
import productErrorsReducer from './product_errors_reducer';
import reviewsErrorReducer from './reviews_errors_reducer';

const errorsReducer = combineReducers({
    signupErrors: signupErrorsReducer,
    loginErrors: loginErrorsReducer,
    productErrors: productErrorsReducer,
    reviewErrors: reviewsErrorReducer
})

export default errorsReducer;
