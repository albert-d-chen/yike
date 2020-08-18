import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.loginErrors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className='login-modal is-open'>
                    <form onSubmit={this.handleSubmit} className='login-modal-form'>
                        <Link to='/' >
                            <span type='submit' className='login-close'>
                            </span>
                        </Link>
                        <h1 className='login-title'>YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
                        <label className='login-info'>
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email Address' className='login-box'/>
                        </label>

                        <br />

                        <label className='login-info'>
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder='Password' className='login-box'/>
                        </label>

                        <div>
                            {this.renderErrors()}
                        </div>

                        <div className='login-button1'>
                            <button type='submit' className='login-button2'>SIGN IN</button>
                        </div>
                        <br/>
                        <span className='login-disclaimer'>By logging in, you agree to Yike's Privacy Policy and Terms of Use</span>
                        <br/>

                        <div className='login-signup'>
                            Not a member? &nbsp;
                            <Link to='/signup' >
                                <span className='signup-join'>
                                    Join Us.
                                </span> 
                            </Link>
                        </div>

                    </form>
                    <div className='login-modal-screen'></div>
            </div>
        )
    }


}

export default LoginForm;