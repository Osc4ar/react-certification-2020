import React, { useRef, useState } from 'react';
import useGAPI from '../../utils/hooks/useGAPI';
import { formatVideosList } from '../../utils/youtube';
import VideoList from '../../components/VideoList';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  const [keyword, setKeyword] = useState('react');
  const [videos, setVideos] = useState([]);
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

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to homepage!</h1>
      <input
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button type="button" onClick={() => searchByKeyword(5)}>
        Search
      </button>
      <VideoList videos={videos} />
    </section>
  );
}

export default HomePage;
