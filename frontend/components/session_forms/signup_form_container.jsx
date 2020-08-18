import React from 'react';
import {connect} from 'react-redux';

import SignupForm from './signup_form';
import {signup} from '../../actions/session_actions';

const mapSTP = state => ({
    signupErrors: state.errors.signupErrors,
    formType: 'signup'
})

const mapDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mapSTP, mapDTP)(SignupForm)