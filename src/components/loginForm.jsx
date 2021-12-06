import React, { Component } from "react";
import Joi from 'joi-browser'
import Input from "../components/input";


class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };


  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
  }



  validate = () => {
    const options = { abortEarly: false }
    const { error } = Joi.validate(this.state.account, this.schema, options)
    if (!error) return null;

    const errors = {}
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;

    // const { account } = this.state;
    // const errors = {};
    // if (account.username.trim() === "")
    //   errors.username = "Username is required...";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required...";
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //const username = this.username.current.value;
    //console.log("submitted ", e.currentTarget);
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //call the server
    console.log("submitting...");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = { [name]: this.schema[name] }
    const { error } = Joi.validate(obj, schema)
    return error ? error.details[0].message : null;

    // if (name === "username") {
    //   if (value.trim() === "") return "Username is required"
    //   //
    // }
    // if (name == "password") {
    //   if (value.trim() === "") return "Password is required"
    // }
  }

  handleChange = ({ currentTarget: input }) => {

    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            label="Username"
            error={errors.username}
          />

          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            label="Password"
            error={errors.password}
          />

          <button type="submit" className="btn btn-primary" disabled={this.validate()} >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
