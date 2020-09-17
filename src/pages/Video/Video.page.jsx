import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Video.styles.css';

function VideoPage() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="videopage">
      <h1>Welcome to your video!</h1>
      {authenticated ? (
        <>
          <Link to="/video">Here is your video →</Link>
          <span role="separator" />
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
          </span>
        </>
      ) : (
        <p>Login →</p>
      )}
    </section>
  );
}

export default VideoPage;
