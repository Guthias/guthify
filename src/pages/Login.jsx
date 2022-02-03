import React, { Component } from 'react';
// import Loading from '../components/Loading';

export default class Login extends Component {
  state = {
    userNameInput: '',
    buttonDisabled: true,
  }

  handleChange = ({ target }) => {
    const MIN_USERNAME_LENGTH = 3;
    this.setState({
      userNameInput: target.value,
      buttonDisabled: target.value.length < MIN_USERNAME_LENGTH,
    });
  }

  render() {
    const { userNameInput, buttonDisabled } = this.state;

    return (
      // <Loading />
      <div data-testid="page-login" className="page-login">
        <form className="login-form">
          <h1 className="login-title">Guthify</h1>
          <input
            type="text"
            id="userNameInput"
            value={ userNameInput }
            onChange={ this.handleChange }
            data-testid="login-name-input"
            placeholder="Nome de Usuario"
            className="login-input"
          />
          <button
            type="submit"
            className="login-button"
            disabled={ buttonDisabled }
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
