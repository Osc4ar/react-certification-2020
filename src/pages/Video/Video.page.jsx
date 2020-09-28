import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import VideosContext from '../../utils/state/VideosContext';
import useGAPI from '../../utils/hooks/useGAPI';
import { formatVideosList } from '../../utils/youtube';
import VideoList from '../../components/VideoList';

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
          maxResults: 5,
          type: ['video'],
        })
        .then(
          function (response) {
            setVideos(formatVideosList(response.result.items));
          },
          function (err) {
            console.error('Execute error', err);
          }
        );
    }
  }, [gapi, videoId, setVideos]);

  return (
    <section className="videopage">
      <h3>{currentVideo.videoTitle}</h3>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        width="1280"
        height="720"
      />
      <p>{currentVideo.videoDescription}</p>
      <VideoList />
    </section>
  );
}

export default VideoPage;
