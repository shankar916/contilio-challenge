import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import './Login.scss';

interface LoginState {
  username: string;
  password: string;
  isButtonDisabled: boolean;
}

class Login extends Component<any, LoginState> {
  state: LoginState = {
    username: '',
    password: '',
    isButtonDisabled: true,
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState(
      (prevState) => ({
        ...prevState,
        [name]: value,
      }),
      this.validateForm
    );
  };

  validateForm = () => {
    const { username, password } = this.state;
    this.setState({
      isButtonDisabled: username.length === 0 || password.length === 0,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.router.navigate('/dashboard');
  };

  render() {
    const { username, password, isButtonDisabled } = this.state;

    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <p>Please enter your credentials</p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
          />
          <button type="submit" disabled={isButtonDisabled}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
