import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';

const headerRoutes = ['/search', '/album/:id', '/favorites', '/profile', '/profile/edit'];

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path={ headerRoutes } component={ Header } />
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
