import React, { useRef, useState } from 'react';
import useGAPI from '../../hooks/useGAPI';
import VideoList from '../../components/VideoList';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  const [keyword, setKeyword] = useState('react');
  const gapi = useGAPI();

  function searchByKeyword(keyword, maxResults = 10) {
    gapi.client.youtube.search
      .list({
        part: ['snippet'],
        maxResults,
        q: keyword,
        type: ['video'],
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log('Response', response);
        },
        function (err) {
          console.error('Execute error', err);
        }
      );
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to homepage!</h1>
      <input
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button type="button" onClick={() => searchByKeyword(keyword, 7)}>
        Search
      </button>
      <VideoList />
    </section>
  );
}

export default HomePage;
