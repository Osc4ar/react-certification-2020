import React, { useRef } from 'react';

import VideoList from '../../components/VideoList';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to homepage!</h1>
      <VideoList />
    </section>
  );
}

export default HomePage;
