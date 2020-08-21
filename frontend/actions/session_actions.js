import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SIGNUP_RECEIVE_ERRORS = 'SIGNUP_RECEIVE_ERRORS';
export const LOGIN_RECEIVE_ERRORS = 'LOGIN_RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser 
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER 
})

export const receiveSignUpErrors = errors => ({
    type: SIGNUP_RECEIVE_ERRORS,
    errors
})

export const receiveLoginErrors = errors => ({
    type: LOGIN_RECEIVE_ERRORS,
    errors 
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(currentUser => (dispatch(receiveCurrentUser(currentUser))),
        err => dispatch(receiveSignUpErrors(err.responseJSON)))
)

export const login = user => dispatch => (
    APIUtil.login(user)
        .then((currentUser) => (dispatch(receiveCurrentUser(currentUser))),
        err => dispatch(receiveLoginErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(dispatch(logoutCurrentUser()))
)

