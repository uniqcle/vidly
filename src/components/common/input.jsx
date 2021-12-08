import React, { Component } from "react";

const Input = ({ name, label, value, password, onChange, account }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        name={name}
        id={name}
        className="form-control"
        type="text"
      />
    </div>
  );
};

export default Input;
