import React from 'react';
import {Link} from 'react-router-dom';

const navBar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className='nav-dropdown'>
            <span className='nav-logged-in'>Hi,&nbsp; {currentUser.first_name} {currentUser.last_name}
                <div className='dropdown-content'>
                    <div onClick={logout} className='logout-dropdown'>Logout</div>
                </div>
            </span>
        </div>
    ) : (
        <div>
            <Link to='/login' className='nav-link'>Join/Log In To Nike Member Profile</Link>
        </div>
    )

    return (
            <div className='nav-login'>
                {display}
            </div>
    )
}

export default navBar;