import React, { useState } from 'react';
import useYoutube from '../../hooks/useYoutube';

import './Video.styles.css';

function VideoPage() {
  const [keyword] = useState('react');
  const [searchByKeyword] = useYoutube();

  const search = () => searchByKeyword(keyword);

  return (
    <section className="videopage">
      <h1>Welcome to your video!</h1>
      <button type="button" onClick={search}>
        Search
      </button>
    </section>
  );
}

export default VideoPage;
