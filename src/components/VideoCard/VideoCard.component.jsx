import React from 'react';

import './VideoCard.styles.css';

function VideoCard({ videoImg, videoTitle, videoDescription }) {
  return (
    <div className="video-card">
      <h2>{videoTitle}</h2>
      <p>{videoDescription}</p>
      <img src={videoImg} alt={videoTitle} />
    </div>
  );
}

export default VideoCard;
