import React, { Component } from "react";
import Form from './common/form'

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


    return (
      <>
        <form onSubmit={this.handleSubmit}>

          {this.renderInput('username', "Username")}
          {this.renderInput('password', "Password", "password")}


          {this.renderButton('Login')}

        </form>
      </>
    );
  }
}

export default LoginForm;
