import React, { Component } from 'react';
import Joi from 'joi-browser'

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    validate = () => {
        const options = { abortEarly: false }
        const { error } = Joi.validate(this.state.data, this.schema, options);

        if (!error) return null;

        const errors = {}
        for (let item of error.details)
            errors[item.path[0]] = item.message
        console.log(errors)
        return errors;


        // const { data } = this.state;
        // const errors = {};
        // if (data.username.trim() === "")
        //   errors.username = "Username isnot corrent";
        // if (data.password.trim() === "")
        //   errors.password = "Password isnot corrent";
        // return Object.keys(errors).length === 0 ? null : errors;
    };


    validateProperty = ({ name, value }) => {
        const obj = { [name]: value }
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
        // if (error) return null;
        // return error.details[0].message;


        // if (name === "username") {
        //   if (value.trim() === "") return "Username is required.";
        // }

        // if (name === "password") {
        //   if (value.trim() === "") return "Password is required.";
        // }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;


        this.doSubmit();
    };


    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };


    renderButton(label) {
        return (
            <button className="btn btn-primary" disabled={this.validate()}>{label}</button>
        )
    }

}
export default Form;