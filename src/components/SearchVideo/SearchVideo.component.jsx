import React, { useState, useContext } from 'react';

import { useHistory } from 'react-router';
import VideosContext from '../../utils/state/VideosContext';
import { formatVideosList } from '../../utils/youtube';
import useGAPI from '../../utils/hooks/useGAPI';
import getPlaceholders from '../../utils/placeholder_videos';

import './SearchVideo.styles.css';

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
      searchByKeyword(10);
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
