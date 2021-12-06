import React, { Component } from "react";
import Form from './common/form'
import Input from "../components/input";
import Joi from 'joi-browser'

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
  }


  doSubmit = () => {
    //call the server
    console.log("submitting...");
  }


  render() {
    const { data, errors } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            onChange={this.handleChange}
            label="Username"
            error={errors.username}
          />

          <Input
            name="password"
            value={data.password}
            onChange={this.handleChange}
            label="Password"
            error={errors.password}
          />

          <button type="submit" className="btn btn-primary" disabled={this.validate()} >
            Login
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
