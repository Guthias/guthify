import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Loading from '../components/Loading';
import audioPlayer from '../images/audio-player.svg';
import { createUser } from '../services/userAPI';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  user-select: none;
`;

const ImageArea = styled.div`
  width: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b5d5f1;

  img {
    width: 50%;
  }
`;

const FormArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2em;
    color: black;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
  }

  input {
    display: flex;
    flex-direction: column;
    font-size: 1em;
    font-weight: 700;
    width: 80%;
    padding: 0.5em;
    margin: 0.25em 0 0.5em 0;
    outline: none;
    border: 2px solid black;
    border-radius: 0.5em;
    transition: ease-in-out 0.5s all;

    :focus {
      border-color: #147fdd;
    }
  }

  button {
    background-color: #147fdd;
    font-size: 1.25em;
    color: white;
    border-radius: 0.5em;
    font-weight: 700;
    width: 50%;
    padding: 0.75em;
    transition: ease-in-out 0.5s all;
    margin-top: 1em;
    cursor: pointer;
    border: none;

    :hover {
      background-color: #0b6bc0;
    }

    :disabled {
      background-color: gray;
    }
  }
`;

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
    await createUser(({
      name,
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    }));
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  renderForm = () => {
    const { userNameInput, buttonDisabled, loading } = this.state;
    return (
      loading ? <Loading /> : (
        <Container>
          <ImageArea>
            <img src={ audioPlayer } alt="" />
          </ImageArea>

          <FormArea>
            <form>
              <h1>Sign in</h1>
              <input
                type="text"
                value={ userNameInput }
                onChange={ this.handleChange }
                placeholder="Username"
              />

              <input
                type="password"
                placeholder="Password"
              />

              <button
                type="submit"
                onClick={ this.loginSubmit }
                disabled={ buttonDisabled }
              >
                Login
              </button>
            </form>
          </FormArea>
        </Container>
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
