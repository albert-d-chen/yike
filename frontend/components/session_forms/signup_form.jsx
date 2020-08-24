import React from 'react';
import {Link} from 'react-router-dom';
import Typical from 'react-typical';
import Home from '../splash/home'


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    renderErrors() {
        return (
            <ul>
                {this.props.signupErrors.map((error, idx) => (
                    <li key={idx} className='signup-errors'>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render(){
        return (
            <div className='signup-modal is-open'>
                    <form onSubmit={this.handleSubmit} className='signup-modal-form'>
                        <Link to='/' >
                            <span type='submit' className='signup-close'>
                                </span>
                        </Link>
                        <p className='typical'> <Typical loop={2000} wrapper='b' steps={[1000, 'BECOME A YIKE MEMBER.', 1000]} /> </p>
                        {/* <h1 className='signup-title'>BECOME A YIKE MEMBER</h1> */}
                        <span className='signup-description'>Create your Yike Member profile and get first access to the very best of Yike products, inspiration, and community</span>

                        <label className='signup-info'>
                            <input type="text" value={this.state.first_name} onChange={this.update('first_name')} placeholder='First Name' className='signup-box'/>
                        </label>
                    
                        <label className='signup-info'>
                            <input type="text" value={this.state.last_name} onChange={this.update('last_name')} placeholder='Last Name' className='signup-box'/>
                        </label>
                    
                        <label className='signup-info'>
                            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email Address' className='signup-box'/>
                        </label>
                    
                        <label className='signup-info'>
                            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder='Password' className='signup-box'/>
                        </label>
                        <div>
                            {this.renderErrors()}
                        </div>
                        <div className='signup-button1'>
                            <button type='submit' className='signup-button2'>JOIN US</button>
                        </div>
                        <br/>
                        <div className='login-signup'>
                                Already a member? &nbsp;
                                <Link to='/login' >
                                <span className='signup-join'>
                                    Sign in.
                                </span>
                                </Link>
                        </div>
                    </form>
                    <div className='signup-modal-screen'><Home /></div>
            </div>
        )
    }


}

export default SignupForm;