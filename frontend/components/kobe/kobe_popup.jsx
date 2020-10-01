import React from 'react';
import { Link } from 'react-router-dom';

class KobePopup extends React.Component {
    render() {
        return (
            <div className='kobepopup'>
                <div className='kobepopup_inner'>
                    <div>
                        <div><iframe width="1450px" height="500px" src="https://www.youtube.com/embed/JHVMW3U5BZE" frameBorder="0" allow='autoplay; encrypted-media' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div className='kobe-popup-close'><button className='kobe-popup-button' onClick={() => { this.props.closePopup;}}><Link to='/products' className='continue-yeeting'>I'm Inspired.</Link> </button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default KobePopup;