import React from 'react';
import {Link} from 'react-router-dom';

const navBar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <h1>Hi, {currentUser.first_name} {currentUser.last_name}</h1>
            <button onClick={logout}>Logout!</button>
        </div>
    ) : (
        <div>
            <Link to='/login'>Log In</Link>
        </div>
    )

    return (
        <div>
            <div>
                {display}
            </div>
        </div>
    )
}

export default navBar;