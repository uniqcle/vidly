import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  username = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log("submitted ", username);
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={this.state.account.username}
              onChange={this.handleChange}
              ref={this.username}
              autoFocus
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
