import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this.state
    if (username && password) {
      this.props.onSubmit(username, password)
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleFormSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
