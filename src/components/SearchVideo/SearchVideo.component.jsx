import React, { useState, useContext } from 'react';

import VideosContext from '../../utils/state/VideosContext';
import { formatVideosList } from '../../utils/youtube';
import useGAPI from '../../utils/hooks/useGAPI';

import './SearchVideo.styles.css';

function SearchVideo() {
  const { setVideos } = useContext(VideosContext);
  const [keyword, setKeyword] = useState('react');
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
        },
        function (err) {
          console.error('Execute error', err);
        }
      );
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchByKeyword(5);
    }
  };

  return (
    <input
      type="text"
      value={keyword}
      onChange={(event) => setKeyword(event.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default SearchVideo;
