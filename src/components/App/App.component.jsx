import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import VideosContext from '../../utils/state/VideosContext';
import FavoritesContext from '../../utils/state/FavoritesContext';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import FavoritesPage from '../../pages/Favorites';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import Nav from '../Nav';

function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
  }, [setFavorites]);

  return (
    <ThemeProvider>
      <CSSReset />
      <BrowserRouter>
        <AuthProvider>
          <VideosContext.Provider
            value={{ videos, setVideos, currentVideo, setCurrentVideo }}
          >
            <FavoritesContext.Provider value={{ favorites, setFavorites }}>
              <Nav />
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/login">
                    <LoginPage />
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
            </FavoritesContext.Provider>
          </VideosContext.Provider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
