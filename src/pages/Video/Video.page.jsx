import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import VideosContext from '../../utils/state/VideosContext';
import './Video.styles.css';

function VideoPage() {
  const { videoId } = useParams();
  const { currentVideo } = useContext(VideosContext);

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
    </section>
  );
}

export default VideoPage;
