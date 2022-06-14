import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import Search from '../pages/Search';
import Aside from './Aside';
import Header from './Header';

const loggedRoutes = ['/search', '/album/:id', '/favorites', '/profile', '/profile/edit'];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const PageArea = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  height: 100%;
  background-color: black;
  color: white;
`;

function Content() {
  return (
    <Container>
      <Route path={ loggedRoutes } component={ Aside } />
      <PageArea>
        <Route path={ loggedRoutes } component={ Header } />
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </PageArea>
    </Container>
  );
}

export default Content;
