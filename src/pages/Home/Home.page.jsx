import React, { useRef } from 'react';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to homepage!</h1>
    </section>
  );
}

export default HomePage;
