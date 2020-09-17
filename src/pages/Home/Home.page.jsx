import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { login, authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/favorites');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to homepage!</h1>
      {authenticated ? (
        <>
          <Link to="/favorites">Favorites →</Link>
          <span role="separator" />
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
          </span>
        </>
      ) : (
        <button type="button" onClick={authenticate}>
          Login →
        </button>
      )}
    </section>
  );
}

export default HomePage;
