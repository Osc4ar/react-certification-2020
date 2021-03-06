import React, { useContext, useEffect } from 'react';

import styled from '@emotion/styled';
import VideoList from '../../components/VideoList';
import FavoritesContext from '../../utils/state/FavoritesContext';
import VideosContext from '../../utils/state/VideosContext';
import useGAPI from '../../utils/hooks/useGAPI';
import { formatVideosLoadedById } from '../../utils/youtube';
import getPlaceholders from '../../utils/placeholder_videos';

const FavoritesSection = styled.section`
  text-align: center;
  display: grid;
  grid-template-rows: 150px 600px;
`;

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
    <FavoritesSection role="main">
      <VideoList />
    </FavoritesSection>
  );
}

export default FavoritesPage;
