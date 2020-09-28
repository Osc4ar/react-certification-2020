import React, { useContext } from 'react';

import VideosContext from '../../utils/state/VideosContext';
import VideoCard from '../VideoCard';

import './VideoList.styles.css';

function VideoList() {
  const { videos, setCurrentVideo } = useContext(VideosContext);

  return (
    <div className="video-list">
      {videos.map((video) =>
        VideoCard({
          videoId: video.videoId,
          videoImg: video.videoImg,
          videoTitle: video.videoTitle,
          onVideoCardClick: () => {
            setCurrentVideo(video);
          },
        })
      )}
    </div>
  );
}

export default VideoList;
