import React from 'react';

class SignupForm extends React.Component {
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
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    renderErrors() {
        return (
            <ul>
                {this.props.signupErrors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        return (
            <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            {this.renderErrors()}
                        </div>

                        <label>Email: 
                            <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        </label>
                        <br/>
                        <label>Password: 
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>
                        <br/>
                        <button type='submit'>Sign Up!</button>
                    </form>
            </div>
        )
    }


}

export default SignupForm;