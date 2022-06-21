import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FaSearch, FaPlayCircle } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

import Logo from '../images/logo-guthify.png';

const AsideArea = styled.aside`
  display: flex;
  flex-direction: column;
  background: #141414;
  color: white;
  width: 15em;

  nav {
    display: flex;
    flex-direction: column;

    a {
      color: #7A7A79;
      text-decoration: none;
      font-size: 1.1em;
      padding: 0.5em 1.5em;
      font-weight: bold;
      border-left: 8px solid transparent;
      border-image-slice: 1;
      :hover {
        background-color: #303030;
      }

      &.active {
        color: white;
        border-color: #147fdd;
        border-image-source: linear-gradient(0deg, #147fdd, #08b2d4);
      }

      svg {
        margin-right: 0.5em;
      }
    }
  }
`;

const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 0;

  h1 {
    display: none;
  }

  img {
    width: 80%;
  }
`;

export default function Aside() {
  return (
    <AsideArea>
      <LogoArea>
        <img src={Logo} alt="Logo do Guthify" />
        <h1>Guthify</h1>
      </LogoArea>
      <nav>
        <NavLink to="/search">
          <FaSearch />
          Search
        </NavLink>
        <NavLink to="/favorites">
          <FaPlayCircle />
          Favorites
        </NavLink>
        <NavLink to="/profile">
          <IoPerson />
          Profile
        </NavLink>
      </nav>
    </AsideArea>
  );
}
