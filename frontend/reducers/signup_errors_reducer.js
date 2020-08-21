import {SIGNUP_RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS} from '../actions/session_actions';


const signupErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case SIGNUP_RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
}

export default signupErrorsReducer;