import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import SearchVideo from '../SearchVideo/SearchVideo.component';

import './Nav.styles.css';

function Nav() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <div className="topnav">
      <Link to="/">
        home
        <span role="img" aria-label="home">
          🏠
        </span>
      </Link>
      {authenticated ? (
        <>
          <Link to="/favorites">
            favorites
            <span role="img" aria-label="favorites">
              ❤️
            </span>
          </Link>
          <Link to="/" onClick={deAuthenticate}>
            logout ←
          </Link>
        </>
      ) : (
        <>
          <p>
            favorites
            <span role="img" aria-label="favorites">
              ❤️
            </span>
          </p>
          <Link to="/login">log in →</Link>
        </>
      )}
      <SearchVideo />
    </div>
  );
}

export default Nav;
