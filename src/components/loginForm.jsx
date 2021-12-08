import React, { Component } from 'react';
import Input from "./common/input";

class LoginForm extends Component {
  username = React.createRef();

  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  // componentDidMount() {
  //     this.username.current.focus();
  // }

  validate = () => {
    const { account } = this.state;
    const errors = {};
    if (account.username.trim() === "")
      errors.username = "Username isnot corrent";
    if (account.password.trim() === "")
      errors.password = "Password isnot corrent";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //const username = this.username.current.value;
    //call the server...
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };

    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;