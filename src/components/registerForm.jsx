import React, { Component } from 'react';
import Form from './common/form'
import Joi from 'joi-browser'

class RegisterForm extends Form {
    state = {
        data: {
            username: "",
            password: "",
            name: ""
        },
        errors: {},
    };

    schema = {
        username: Joi.string().email().required().label("Username"),
        password: Joi.string().required().label("Password"),
        name: Joi.string().required().label("Name")
    }

    doSubmit = () => {
        //call the server
        console.log("register...");
    }



    render() {
        return (
            <>
                <h3>Register</h3>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', "Username")}
                    {this.renderInput('password', "Password", "password")}
                    {this.renderInput('name', "Name")}

                    {this.renderButton('Register')}
                </form>
            </>
        )
    }
}

export default RegisterForm;