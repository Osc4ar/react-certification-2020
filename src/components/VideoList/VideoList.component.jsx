import React from 'react';
import VideoCard from '../VideoCard';

import './VideoList.styles.css';

function VideoList() {
  const videos = [];
  for (let i = 0; i < 7; i += 1) {
    videos.push({
      videoTitle: `Video ${i}`,
      videoDescription: `This is a test description with id: ${i}`,
      videoImg: 'logo192.png',
    });
  }

  return <div className="video-list">{videos.map((video) => VideoCard(video))}</div>;
}

export default VideoList;
