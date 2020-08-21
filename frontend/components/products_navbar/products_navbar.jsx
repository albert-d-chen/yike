import React from 'react';
import { Link } from 'react-router-dom';

const productsNavBar = () => {
    return (
        <div>
            <div className='main-nav'>

                <nav className='nav-left-prod'>
                    <div className='nav-left'>
                            <div className='nav-left-ele'> <Link to='/'><img src={window.images.logo} className='nav-logo'/></Link> </div>
                    </div>
                </nav>

                <nav className='nav-center-prod'>

                            <div className='nav-center-ele'>
                                <div className='prod-nav-dropdown'>
                                    <div className='prod-nav inline'><Link to='/products' className='prod-nav-link'>ALL</Link>
                                        <div className='prod-nav-dropdown-content'>
                                            <div><Link to='/products' className='prod-nav-link'>Shoes</Link></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='prod-nav-dropdown'>
                                    <div className='prod-nav inline'><Link to='/men' className='prod-nav-link'>MEN</Link>
                                        <div className='prod-nav-dropdown-content'>
                                            <div className='inline'><Link to='/mensbasketball' className='prod-nav-link'>Basketball</Link></div>
                                            <div className='inline'><Link to='/mensrunning' className='prod-nav-link'>Running</Link></div>
                                            <div className='inline'><Link to='/menscasual' className='prod-nav-link'>Casual</Link></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='prod-nav-dropdown'>
                                    <div className='prod-nav inline'><Link to='/women' className='prod-nav-link'>WOMEN</Link>
                                        <div className='prod-nav-dropdown-content'>
                                            <div className='inline'><Link to='/womensbasketball' className='prod-nav-link'>Basketball</Link></div>
                                            <div className='inline'><Link to='/womensrunning' className='prod-nav-link'>Running</Link></div>
                                            <div className='inline'><Link to='/womenscasual' className='prod-nav-link'>Casual</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </nav>
        </div>

    </div>

    )
}

export default productsNavBar;
