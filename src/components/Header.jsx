import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoPerson } from 'react-icons/io5';
import { FaMoon, FaSearch } from 'react-icons/fa';

import { getUser } from '../services/userAPI';
import Loading from './Loading';

const HeaderArea = styled.header`
  background-color: black;
  color: white;
  display: flex;
  padding: 1em 3em;
  justify-content: space-between;
  
  form {
    display: flex;
    flex-direction: row;
    width: 100%;
    
    * {
      transition: ease-in-out all 0.3s;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      padding: 0.5em;
      font-size: 1.1em;
      background-color: #303030;
      border-top-left-radius: 0.5em;
      border-bottom-left-radius: 0.5em;
      width: 75%;

      :focus {
        border: 2px solid #147fdd;
        border-right: none;
        width: 100%;
      }

      :focus + button {
        border: 2px solid #147fdd;
        border-left: none;
      }
    }

    button {
      background-color: #303030;
      border: none;
      color: white;
      border-top-right-radius: 0.5em;
      border-bottom-right-radius: 0.5em;
      padding: 0 0.7em;
      font-size: 1.2em;
      cursor: pointer;
      :hover {
        background-color: #4d4d4d;
      }
    }
  }

  div {
    display: flex;
    justify-content: end;
    gap: 1em;
    width: 150%;

    a, button {
      color: white;
      display: flex;
      text-decoration: none;
      align-items: center;
      font-weight: 700;
      font-size: 1.2em;
      padding: 0.5em;
      border-radius: 0.5em;
      background-color: #303030;
      cursor: pointer;
      user-select: none;
      transition: ease-in-out 0.3s all;

      :hover {
        background-color: #4d4d4d;
      }

      svg {
      display: flex;
      flex-direction: row;
      font-size: 1.2em;
        & + span {
          margin-left: 0.5em;
        }
      }
    }
  }
`;

export default class Header extends Component {
  state = {
    user: {},
    loading: true,
  }

  async componentDidMount() {
    this.setState({ user: await getUser(), loading: false });
  }

  renderHeader = () => {
    const { user } = this.state;
    return (
      <HeaderArea>
        <form>
          <input
            type="text"
            id="search"
            placeholder="Search for artists, albuns or musics"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <div>
          <button type="button">
            <FaMoon />
          </button>
          <Link to="/profile">
            <IoPerson />
            <span>{ user.name }</span>
          </Link>
        </div>
      </HeaderArea>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      loading ? <Loading /> : this.renderHeader()
    );
  }
}
