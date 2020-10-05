import React, { useContext } from 'react';

import { SimpleGrid } from '@chakra-ui/core';
import styled from '@emotion/styled';
import VideosContext from '../../utils/state/VideosContext';
import VideoCard from '../VideoCard';

function VideoList() {
  const { videos, setCurrentVideo } = useContext(VideosContext);

  return (
    <SimpleGrid columns={[1, null, 5]} spacing="40px">
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
    </SimpleGrid>
  );
}

export default VideoList;
