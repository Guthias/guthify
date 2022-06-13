import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AsideArea = styled.aside`
  display: flex;
  flex-direction: column;
  background: #141414;
  color: white;
  width: 15em;

  nav {
    display: flex;
    flex-direction: column;
    
    h1 {
      text-align: center;
    }

    a {
      color: #7A7A79;
      text-decoration: none;
      font-size: 1.1em;
      padding: 0.5em 1.5em;
      font-weight: bold;
      border-left: 8px solid transparent;

      :hover {
        background-color: #303030;
      }

      &.active {
        color: white;
        border-color: #147fdd;
      }
    }
  }
`;

export default function Aside() {
  return (
    <AsideArea>
      <h1>Guthify</h1>
      <nav>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </AsideArea>
  );
}
