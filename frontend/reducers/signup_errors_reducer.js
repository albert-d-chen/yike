import {SIGNUP_RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';


const signupErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case SIGNUP_RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default signupErrorsReducer;