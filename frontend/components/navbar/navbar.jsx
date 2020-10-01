import React from 'react';
import {Link} from 'react-router-dom';
import CartItems from '../cart_items/cart_items_index_container';

const navBar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className='nav-dropdown'>
            <div className='nav-logged-in'>Hi,&nbsp; {currentUser.first_name} {currentUser.last_name}
                <div className='dropdown-content'>
                    <div className='logout-dropdown'><Link to='/reviews' className= 'logout-link'>Your Reviews</Link></div>
                    <div onClick={() => {  logout(); }} className='logout-dropdown'><Link to='/' className='logout-link'>Logout</Link></div>
                </div>
              
            </div>
            <div className='cart1'><Link to='/shoppingcart'> <i className="fas fa-shopping-cart cart1b" style={{ color: 'black' }}></i></Link></div>
        </div>
    ) : (
        <div>
            <Link to='/login' className='nav-link'>Join/Log In To Nike Member Profile</Link>
            <div className='cart2'><Link to='/shoppingcart'> <i className="fas fa-shopping-cart cart2b" style={{color:'black'}}></i></Link></div>
        </div>
    )

    return (
            <div className='nav-login'>
                {display}
            </div>
    )
}

export default navBar;