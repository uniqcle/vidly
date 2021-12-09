import React, { Component } from 'react';
import Joi from 'joi-browser'
import Form from './common/form'
import Input from "./common/input";

class LoginForm extends Form {
  username = React.createRef();

  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };


  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }

  // componentDidMount() {
  //     this.username.current.focus();
  // }


  doSubmit = () => {
    //const username = this.username.current.value;
    //call the server...
  }


  render() {
    const { data, errors } = this.state;

    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;