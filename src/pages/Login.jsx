import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="username-input">
            Username
            <input
              type="text"
              id="username-input"
              data-testid="login-name-input"
              placeholder="Nome de Usuario"
              className="login-input"
            />
          </label>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    );
  }
}
