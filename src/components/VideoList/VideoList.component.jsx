import React from 'react';
import VideoCard from '../VideoCard';

import './VideoList.styles.css';

function VideoList({ videos }) {
  return <div className="video-list">{videos.map((video) => VideoCard(video))}</div>;
}

export default VideoList;
