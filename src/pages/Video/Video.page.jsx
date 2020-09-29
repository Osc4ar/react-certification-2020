import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import VideosContext from '../../utils/state/VideosContext';
import useGAPI from '../../utils/hooks/useGAPI';
import { formatVideosList } from '../../utils/youtube';
import VideoList from '../../components/VideoList';
import FavoriteButton from '../../components/FavoriteButton';
import getPlaceholders from '../../utils/placeholder_videos';

import './Video.styles.css';

function VideoPage() {
  const { videoId } = useParams();
  const { setVideos, currentVideo } = useContext(VideosContext);
  const gapi = useGAPI();

  useEffect(() => {
    if (gapi !== null) {
      gapi.client.youtube.search
        .list({
          relatedToVideoId: videoId,
          part: ['snippet'],
          maxResults: 6,
          type: ['video'],
        })
        .then(
          function (response) {
            setVideos(formatVideosList(response.result.items));
          },
          function (err) {
            console.error('Execute error', err);
            setVideos(getPlaceholders(6));
          }
        );
    }
  }, [gapi, videoId, setVideos]);

  return (
    <section className="videopage">
      <h3>{currentVideo.videoTitle || 'API connection problem'}</h3>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        width="1280"
        height="720"
      />
      <FavoriteButton videoId={videoId} />
      <p className="video-description">
        {currentVideo.videoDescription ||
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
      </p>
      <VideoList />
    </section>
  );
}

export default VideoPage;
