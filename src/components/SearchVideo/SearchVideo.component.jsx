import React, { useState, useContext } from 'react';

import { useHistory } from 'react-router';
import { Input, InputGroup, InputRightElement, Icon } from '@chakra-ui/core';
import styled from '@emotion/styled';
import VideosContext from '../../utils/state/VideosContext';
import { formatVideosList } from '../../utils/youtube';
import useGAPI from '../../utils/hooks/useGAPI';
import getPlaceholders from '../../utils/placeholder_videos';

const NavInput = styled(Input)`
  background-color: #ffffff00;
`;

function SearchVideo() {
  const history = useHistory();
  const { setVideos } = useContext(VideosContext);
  const [keyword, setKeyword] = useState('reactjs');
  const gapi = useGAPI();

  const searchByKeyword = (maxResults = 10) => {
    gapi.client.youtube.search
      .list({
        part: ['snippet'],
        maxResults,
        q: keyword,
        type: ['video'],
      })
      .then(
        function (response) {
          setVideos(formatVideosList(response.result.items));
          history.push('/');
        },
        function (err) {
          console.error('Execute error', err);
          setVideos(getPlaceholders());
          history.push('/');
        }
      );
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchByKeyword(15);
    }
  };

  return (
    <InputGroup>
      <NavInput
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type something to search"
      />
      <InputRightElement>
        <Icon name="search" color="gray.300" />
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchVideo;
