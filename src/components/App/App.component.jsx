import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import VideosContext from '../../utils/state/VideosContext';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import FavoritesPage from '../../pages/Favorites';
import VideoPage from '../../pages/Video';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import Nav from '../Nav';

function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  return (
    <BrowserRouter>
      <AuthProvider>
        <VideosContext.Provider
          value={{ videos, setVideos, currentVideo, setCurrentVideo }}
        >
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
        </VideosContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
