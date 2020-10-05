import React, { useContext, useEffect } from 'react';

import VideoList from '../../components/VideoList';
import FavoritesContext from '../../utils/state/FavoritesContext';
import VideosContext from '../../utils/state/VideosContext';
import useGAPI from '../../utils/hooks/useGAPI';
import { formatVideosLoadedById } from '../../utils/youtube';
import getPlaceholders from '../../utils/placeholder_videos';

import './Favorites.styles.css';

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  const { setVideos } = useContext(VideosContext);
  const gapi = useGAPI();

  useEffect(() => {
    if (gapi !== null) {
      console.log(favorites);
      gapi.client.youtube.videos
        .list({
          part: ['snippet'],
          id: favorites.join(','),
        })
        .then(
          function (response) {
            setVideos(formatVideosLoadedById(response.result.items));
          },
          function (err) {
            console.error('Execute error', err);
            setVideos(getPlaceholders());
          }
        );
    }
  }, [gapi, favorites, setVideos]);

  return (
    <section className="favoritespage">
      <VideoList />
    </section>
  );
}

export default FavoritesPage;
