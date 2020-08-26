import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


class Home extends React.Component {
    
    render () {
        return (
            <div>
                <div className='home-container'>
                    <div className='slider'>
                        <figure>
                            <Link to='/products'><img src={window.images.cover} className='home-img'/></Link>
                            <Link to='/products'><img src={window.images.slide1} className='home-img'/></Link>
                            <Link to='/products'><img src={window.images.slide2} className='home-img'/></Link>

                        </figure>
                    </div>

                    <div className='mamba-container'>
                        <div className='mamba-header'>THIS IS MAMBA 
                            <div className='mamba-header2'>MENTALITY</div>
                        </div>
                        
                        <div className='mamba-quote1'>The mindset isn't about seeking a result—it's more about the process of getting to that result.</div>
                        <div className='mamba-quote2'> It's about the journey and the approach. It's a way of life. I do think that </div>
                        <div className='mamba-quote3'> it's important, in all endeavors, to have that</div>
                        <div className='mamba-quote4'> mentality.</div>
                        <div className='mamba-kobe'>Kobe Bryant</div>
                        <div className='mamba-explore'>
                            <Link to='/products' className='explore-link'>
                                    Explore
                            </Link>
                        </div>
                    </div>



                    <div className='three-pic-container'>
                        <div className='three-pic-header'>
                            <div>Be A Mamba.</div>
                            &nbsp;
                            <div>Be Kobe.</div>
                        </div>

                        <div className='three-pic'>
                            <div className='pic-one'>
                                <Link to='/women' ><img className='pic-image' src={window.images.threepic1} /></Link>
                                <div className='product-info-one'><Link to='/women' className='three-pic-link'>Adventure To The Unknown</Link></div>
                            </div>

                            <div className='pic-two'>
                                <Link to='products' ><img className='pic-image' src={window.images.threepic2} /></Link>
                                <div className='product-info-two'><Link to='products' className='three-pic-link'>Trending Fits</Link></div>
                            </div>

                            <div className='pic-three'>
                                <Link to='/men' ><img className='pic-image' src={window.images.threepic3} /></Link>
                                <div className='product-info-three'><Link to='/men' className='three-pic-link'>Get To Cloud 9</Link></div>

                            </div>
                        </div>
                    </div>


                    <div className='joinus-container'>
                        <div className='joinus-header'>
                            WHERE ALL YEETERS BELONG.
                        </div>

                        <div className='joinus-info'>When you're with us as a Yike Member, you'll have access to the best Yike products, inspiration and community</div>

                        <div className='joinus-explore'>
                            <Link to='/signup' className='explore-link'>
                                Join Us
                            </Link>
                        </div>
                    </div>


                
                    <div className='footer-main'>
                        <div className='kobe'>
                            In memory of Kobe Bryant.
                        </div>
                        <div className='social-icons'>
                            
                            <a href="https://github.com/albert-d-chen"><i className="fab fa-github fa-2x footer-icon" style={{color: 'white'}}></i></a>
                            <a href="https://linkedin.com/in/albertdchen"><i className="fab fa-linkedin fa-2x footer-icon" style={{ color: 'white' }}></i></a>
                            
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Home;