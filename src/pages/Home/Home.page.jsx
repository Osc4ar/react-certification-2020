import React, { useRef } from 'react';
import Nav from '../../components/Nav';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Nav />
      <h1>Welcome to homepage!</h1>
    </section>
  );
}

export default HomePage;
