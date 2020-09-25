import React from 'react';

import './VideoCard.styles.css';

function VideoCard({ index, videoImg, videoTitle, videoDescription }) {
  return (
    <div className="video-card" key={index}>
      <img src={videoImg} alt={videoTitle} />
      <p>{videoTitle}</p>
      <p>{videoDescription}</p>
    </div>
  );
}

export default VideoCard;
