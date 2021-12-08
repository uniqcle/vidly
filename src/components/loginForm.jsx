import React, { Component } from 'react';

class LoginForm extends Component {
    username = React.createRef();

    state = {
        account: {
            username: '',
            password: ''
        }
    }

    // componentDidMount() {
    //     this.username.current.focus();
    // }

    handleSubmit = e => {
        e.preventDefault();

        const username = this.username.current.value;
        //call the server...
    }

    handleChange = e => {
        const account = { ...this.state.account }
        account.username = e.currentTarget.value;
        this.setState({ account })
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input ref={this.username}
                            value={this.state.account.username}
                            onChange={this.handleChange}
                            autoFocus
                            id="username"
                            type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>

        )
    }
}

export default LoginForm;