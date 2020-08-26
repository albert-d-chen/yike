import React from 'react';
import {Link} from 'react-router-dom';
import CartItems from '../cart_items/cart_items_index_container';

const navBar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className='nav-dropdown'>
            <span className='nav-logged-in'>Hi,&nbsp; {currentUser.first_name} {currentUser.last_name}
                <div className='dropdown-content'>
                    <div onClick={() => { logout(); window.location.reload(false);}} className='logout-dropdown'><Link to='/'>Logout</Link></div>
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
                <div>
                    <Link to='/shoppingcart'> Cart</Link>
                </div>
            </div>
    )
}

export default navBar;