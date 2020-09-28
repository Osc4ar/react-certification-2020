import React from 'react';
import { Link } from 'react-router-dom';

import './VideoCard.styles.css';

function VideoCard({ videoId, videoImg, videoTitle }) {
  return (
    <Link to={`/video/${videoId}`}>
      <div className="video-card" key={videoId}>
        <img src={videoImg} alt={videoTitle} />
        <p>{videoTitle}</p>
      </div>
    </Link>
  );
}

export default VideoCard;
