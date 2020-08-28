import React from 'react';

class PopupVenmo extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div>
                        <div className='popup-header'>Venmo: @albertdchen</div>
                        <div className='popup-gif'><iframe src="https://giphy.com/embed/eH5e8LXYBzKKI" width="250" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
                        <div className='popup-close'><button className='popup-button' onClick={this.props.closePopup}>Continue Yeeting</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupVenmo;