import React from 'react';
import { Link } from 'react-router-dom';
import KobePopup from './kobe_popup';

class Kobe extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showKobePopup: false
        }
    }

    togglePopUpKobe() {
        this.setState({
            showKobePopup: !this.state.showKobePopup
        })
    }

    render(){
        return(
            <div>
                <div className='checkout'><button onClick={() => { this.togglePopUpKobe() }} className='kobeButton'>Inspire Me.</button></div>
                {this.state.showKobePopup ?
                    <KobePopup closePopup={this.togglePopUpKobe} /> : null}
            </div>

        )
    }
}

export default Kobe;