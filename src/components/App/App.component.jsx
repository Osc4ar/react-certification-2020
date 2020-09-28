import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import FavoritesPage from '../../pages/Favorites';
import VideoPage from '../../pages/Video';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import Nav from '../Nav';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Private exact path="/favorites">
              <FavoritesPage />
            </Private>
            <Route exact path="/video/:videoId">
              <VideoPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
