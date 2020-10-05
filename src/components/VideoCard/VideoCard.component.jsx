import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image } from '@chakra-ui/core';
import styled from '@emotion/core';

import './VideoCard.styles.css';

function VideoCard({ videoId, videoImg, videoTitle, onVideoCardClick }) {
  return (
    <Link to={`/video/${videoId}`} onClick={onVideoCardClick} key={videoId}>
      <Box
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        padding="10px"
        maxWidth="250px"
        minWidth="250px"
        maxHeight="250px"
        minHeight="250px"
      >
        <Image src={videoImg} alt={videoTitle} width="240px" height="180px" />
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" color="white">
          {videoTitle}
        </Box>
      </Box>
    </Link>
  );
}

export default VideoCard;
