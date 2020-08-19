import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
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
                    <li key={idx} className='login-errors'>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    loginDemoUser(e) {
        e.preventDefault();
        const demoUser = { email: '8kobe24@mamba.com', password: 'password', first_name: 'Kobe', last_name:'Bryant' };
        let { email, password, first_name, last_name} = demoUser;
        
        let interval = 150;

        let login = () => {
            this.props.processForm(this.state);
        }

        if (this.state.email !== email) {
            let inputEmail = setInterval(() => {
                if (this.state.email !== email) {
                    let tempEmail = email.slice(0, this.state.email.length + 1);
                    this.setState({ email: tempEmail })
                } else {
                    clearInterval(inputEmail);
                    fillPassword();
                }
            }, interval)
        }

        let fillPassword = () => {
            let inputPassword = setInterval(() => {
                if (this.state.password !== password) {
                    let tempPassword = password.slice(0, this.state.password.length + 1);
                    this.setState({ password: tempPassword })
                } else {
                    clearInterval(inputPassword);
                    login();
                }
            }, interval)
        }
        
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        return (
            <div className='login-modal is-open'>
                    <form onSubmit={this.handleSubmit} className='login-modal-form'>
                        <Link to='/' >
                            <span type='submit' className='login-close'>
                            </span>
                        </Link>
                        <p className='typical'> <Typical loop={2000} wrapper='b' steps={[1000, 'YOUR ACCOUNT FOR EVERYTHING YIKE.', 1000]} /> </p>

                        {/* <h1 className='login-title'>YOUR ACCOUNT FOR EVERYTHING YIKE</h1> */}
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
                        <div className='login-button1'>
                            <button type='submit' onClick={this.loginDemoUser} className='login-button2'>DEMO SIGN IN</button>
                        </div>
                        <br/>
                        <span className='login-disclaimer'>By logging in, you agree to Yike's Privacy Policy and Terms of Use</span>

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