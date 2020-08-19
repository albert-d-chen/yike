import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
    <div>
        <header className='nav-parent'>
            <nav className='nav-left'>
                <ul>
                    <li>
                        <div className='nav-left-ele'>Yike</div> 
                    </li> 
                </ul>
            </nav>
            <nav className='nav-right'>
                <ul>
                    <li>
                        <div className='nav-right-ele'><NavBarContainer/></div>
                    </li>
                </ul>
            </nav>
        </header>
            <img src={window.images.logo} className='nav-logo' />
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/>
    </div>
);

export default App;