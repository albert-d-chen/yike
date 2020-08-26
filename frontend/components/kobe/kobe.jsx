import React from 'react';
import { Link } from 'react-router-dom';

class Kobe extends React.Component{
    render(){
        return(
        <div className='kobe-modal is-open'>
            <div className='kobe-modal-form'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/C9I-W1eTCbk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullcreen></iframe>
            </div>

            <div className='kobe-modal-screen'></div>
        </div>
        )
    }
}

export default Kobe;