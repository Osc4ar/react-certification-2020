import React from 'react';
import { Link } from 'react-router-dom';

import './VideoCard.styles.css';

function VideoCard({ videoId, videoImg, videoTitle, onVideoCardClick }) {
  return (
    <Link to={`/video/${videoId}`} onClick={onVideoCardClick} key={videoId}>
      <div className="video-card">
        <img src={videoImg} alt={videoTitle} />
        <p>{videoTitle}</p>
      </div>
    </Link>
  );
}

export default VideoCard;
