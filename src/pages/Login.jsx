import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';
// import Loading from '../components/Loading';

export default class Login extends Component {
  state = {
    userNameInput: '',
    buttonDisabled: true,
    loading: false,
    redirect: false,
  }

  handleChange = ({ target }) => {
    const MIN_USERNAME_LENGTH = 3;
    this.setState({
      userNameInput: target.value,
      buttonDisabled: target.value.length < MIN_USERNAME_LENGTH,
    });
  }

  loginSubmit = async (event) => {
    event.preventDefault();
    const { userNameInput: name } = this.state;
    this.setState({ loading: true });
    await createUser(({ name }));
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  renderForm = () => {
    const { userNameInput, buttonDisabled, loading } = this.state;
    return (
      loading ? <Loading /> : (
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
              data-testid="login-submit-button"
              onClick={ this.loginSubmit }
              disabled={ buttonDisabled }
            >
              Login
            </button>
          </form>
        </div>
      )
    );
  }

  render() {
    const { redirect } = this.state;
    return (
      redirect ? <Redirect to="/search" /> : this.renderForm()
    );
  }
}
