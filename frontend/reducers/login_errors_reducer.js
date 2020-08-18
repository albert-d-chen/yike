import { LOGIN_RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';


const loginErrorsReducer =  (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case LOGIN_RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default loginErrorsReducer;