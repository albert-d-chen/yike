import {combineReducers} from 'redux';
import signupErrorsReducer from './signup_errors_reducer'
import loginErrorsReducer from './login_errors_reducer'

const errorsReducer = combineReducers({
    signupErrors: signupErrorsReducer,
    loginErrors: loginErrorsReducer
})

export default errorsReducer;
