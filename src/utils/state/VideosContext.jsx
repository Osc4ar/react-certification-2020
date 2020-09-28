import React from 'react';

const VideosContext = React.createContext({
  videos: [],
  setVideos: () => {},
  currentVideo: {},
  setCurrentVideo: () => {},
});

export default VideosContext;
