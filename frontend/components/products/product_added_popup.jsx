import React from 'react';

class PopupAdded extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div>
                        <div className='popup-header'>Product Already In Cart!</div>
                        <div className='popup-close'><button className='popup-button' onClick={this.props.closePopup}>Continue Yeeting</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupAdded;