import React, { Component } from 'react';

class LoginForm extends Component {
  username = React.createRef();

  state = {
    account: {
      username: "",
      password: "",
    },
  };

  // componentDidMount() {
  //     this.username.current.focus();
  // }

  handleSubmit = (e) => {
    e.preventDefault();

    //const username = this.username.current.value;
    //call the server...
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    console.log(input.name);

    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={account.password}
              name="password"
              onChange={this.handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;