import React, { useEffect, useRef, useContext } from 'react';

import VideosContext from '../../utils/state/VideosContext';
import { formatVideosList } from '../../utils/youtube';
import useGAPI from '../../utils/hooks/useGAPI';
import VideoList from '../../components/VideoList';
import getPlaceholders from '../../utils/placeholder_videos';

function HomePage() {
  const sectionRef = useRef(null);
  const { setVideos } = useContext(VideosContext);
  const gapi = useGAPI();

  useEffect(() => {
    if (gapi !== null) {
      gapi.client.youtube.search
        .list({
          part: ['snippet'],
          maxResults: 15,
          q: 'reactjs',
          type: ['video'],
        })
        .then(
          function (response) {
            setVideos(formatVideosList(response.result.items));
          },
          function (err) {
            console.error('Execute error', err);
            setVideos(getPlaceholders(15));
          }
        );
    }
  }, [gapi, setVideos]);

  return (
    <section className="homepage" ref={sectionRef}>
      <VideoList />
    </section>
  );
}

export default HomePage;
