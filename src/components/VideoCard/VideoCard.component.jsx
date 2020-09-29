import React from 'react';
import { Link } from 'react-router-dom';

import './VideoCard.styles.css';

function VideoCard({ videoId, videoImg, videoTitle, onVideoCardClick }) {
  return (
    <Link to={`/video/${videoId}`} onClick={onVideoCardClick} key={videoId}>
      <article className="video-card">
        <img src={videoImg} alt={videoTitle} />
        <p className="video-title">{videoTitle}</p>
      </article>
    </Link>
  );
}

export default VideoCard;
