import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Heading, Text, Flex, AspectRatioBox, Box, SimpleGrid } from '@chakra-ui/core';
import VideosContext from '../../utils/state/VideosContext';
import useGAPI from '../../utils/hooks/useGAPI';
import { formatVideosList } from '../../utils/youtube';
import VideoList from '../../components/VideoList';
import FavoriteButton from '../../components/FavoriteButton';
import getPlaceholders from '../../utils/placeholder_videos';

function VideoPage() {
  const { videoId } = useParams();
  const { setVideos, currentVideo } = useContext(VideosContext);
  const gapi = useGAPI();

  useEffect(() => {
    if (gapi !== null) {
      gapi.client.youtube.search
        .list({
          relatedToVideoId: videoId,
          part: ['snippet'],
          maxResults: 5,
          type: ['video'],
        })
        .then(
          function (response) {
            setVideos(formatVideosList(response.result.items));
          },
          function (err) {
            console.error('Execute error', err);
            setVideos(getPlaceholders(6));
          }
        );
    }
  }, [gapi, videoId, setVideos]);

  return (
    <SimpleGrid as="section" spacingY="20px" marginTop="25rem">
      <Heading color="white">
        {currentVideo.videoTitle || 'API connection problem'}
      </Heading>
      <AspectRatioBox ratio={16 / 9}>
        <Box
          as="iframe"
          title="video"
          src={`https://www.youtube.com/embed/${videoId}`}
          maxW="1280px"
          allowFullScreen
        />
      </AspectRatioBox>
      <Flex align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal">
        <Text color="white" maxW="1000">{currentVideo.videoDescription}</Text>
        <FavoriteButton videoId={videoId} />
      </Flex>
      <VideoList />
    </SimpleGrid>
  );
}

export default VideoPage;
