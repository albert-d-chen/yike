import React from 'react';
import {Link} from 'react-router-dom'; 

class PopupCheckout extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div>
                        <div className='popup-header'>YEETING Your Order To You!</div>
                        <div className='popup-gif'><iframe src="https://giphy.com/embed/INZUj2jZSruso" width="250" height="250" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
                        <div className='popup-close'><button className='popup-button' onClick={() => { this.props.closePopup; this.props.clearCart() }}><Link to='/products' className='continue-yeeting'> Continue Yeeting</Link> </button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupCheckout;