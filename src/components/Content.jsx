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

const asideRoutes = ['/search', '/album/:id', '/favorites', '/profile', '/profile/edit'];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function Content() {
  return (
    <Container>
      <Route path={ asideRoutes } component={ Aside } />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Container>
  );
}

export default Content;
