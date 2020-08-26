import React from 'react';
import {Route, Link} from 'react-router-dom';
import {AuthRoute, ProtectedRoute, HomeRoute} from '../util/route_util';

import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import NavBarContainer from './navbar/navbar_container';
import ProductsNavBarContainer from './products_navbar/products_navbar';

import ProductIndexContainer from '../components/products/product_index_container';
import ProductShowContainer from '../components/products/product_show_container';
import MenIndexContainer from '../components/products/men_index/men_index_container';
import WomenIndexContainer from '../components/products/women_index/women_index_container';
import MBasketballIndexContainer from '../components/products/men_index/basketball_index/basketball_index_container';
import MRunningIndexContainer from '../components/products/men_index/running_index/running_index_container';
import MCasualIndexContainer from '../components/products/men_index/casual_index/casual_index_container';
import WBasketballIndexContainer from '../components/products/women_index/basketball_index/basketball_index_container';
import WRunningIndexContainer from '../components/products/women_index/running_index/running_index_container';
import WCasualIndexContainer from '../components/products/women_index/casual_index/casual_index_container';

import CartItemsContainer from '../components/cart_items/cart_items_index_container';

import Splash from './splash/home';


// import KobeContainer from '../components/kobe/kobe_container'
// import Kobe from './kobe/kobe';
// import SplashCarousel from './splash/splash';


const App = () => (
    <div>
        <div className='nav-header'>
            <header className='nav-parent'>
                <nav className='nav-left'>
                    <ul>
                        <li>
                            <div className='nav-left-ele top'><Link to="/" className='nav-yike-link'>Yike</Link></div> 
                            <div className='nav-git'><a href="https://github.com/albert-d-chen"><i className="fab fa-github fa-2x footer-icon" style={{ color: 'lightblue' }}></i></a></div>
                            <div className='nav-linkedin'><a href="https://linkedin.com/in/albertdchen"><i className="fab fa-linkedin fa-2x footer-icon" style={{ color: 'lightblue' }}></i></a></div>
                            {/* <div><Kobe /></div> */}
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
            <ProductsNavBarContainer/>  
        </div>

        <div className='border'>
            <div className='slider-wrap'>
                
            <div className='border-text slider2' style={{marginRight: "40px"}}>
                        <div className='border-caption1'>JUST&nbsp;</div> 
                        <div className='test'>
                            <div className='border-caption3'>YEET</div>
                            <div className='border-caption4'>EAT</div>
                            <div className='border-caption5'>CODE</div>
                        </div>
                        <div className='border-caption2'>&nbsp;IT.</div>
                </div>
                
            </div>
        </div>

        
        <br/>
        
        {/* <div><SplashCarousel/></div> */}

        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/>
        <Route exact path='/products' component={ProductIndexContainer} />
        <Route exact path='/' component={Splash}/>
        <Route path='/products/:productId' component={ProductShowContainer} />

        <Route exact path = '/men' component={MenIndexContainer} />
        <Route exact path = '/women' component={WomenIndexContainer} />
        <Route exact path = '/mensbasketball' component={MBasketballIndexContainer} />
        <Route exact path = '/mensrunning' component={MRunningIndexContainer} />
        <Route exact path = '/menscasual' component={MCasualIndexContainer} />
        <Route exact path = '/womensbasketball' component={WBasketballIndexContainer} />
        <Route exact path = '/womensrunning' component={WRunningIndexContainer} />
        <Route exact path = '/womenscasual' component={WCasualIndexContainer} />

        <Route exact path ='/shoppingcart' component={CartItemsContainer}/>
        
        {/* <Route exactpath= '/kobe' component={KobeContainer} /> */}
    </div>
);

export default App;