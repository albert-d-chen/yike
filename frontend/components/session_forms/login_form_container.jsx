import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mapSTP = state => ({
    loginErrors: state.errors.loginErrors,
    formType: 'login'
})

const mapDTP = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(mapSTP, mapDTP)(LoginForm);