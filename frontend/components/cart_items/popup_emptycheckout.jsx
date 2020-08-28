import React from 'react';
import {Link} from 'react-router-dom';

class PopupCheckout extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div>
                        <div className='popup-header'>Add Items to Cart!</div>
                        <div className='popup-gif'><iframe src="https://giphy.com/embed/opt1ronWlJhXa" width="250" height="250" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
                        <div className='popup-close'><button className='popup-button' onClick={this.props.closePopup}><Link to='/products' className='continue-yeeting'>Continue Yeeting</Link></button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupCheckout;