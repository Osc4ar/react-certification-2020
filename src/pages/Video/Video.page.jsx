import React from 'react';
import { useParams } from 'react-router-dom';

import './Video.styles.css';

function VideoPage() {
  const { videoId } = useParams();

  return (
    <section className="videopage">
      <h3>The video with ID {videoId}!</h3>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullscreen
        title="video"
        width="1280"
        height="720"
      />
    </section>
  );
}

export default VideoPage;
