import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

import './Nav.styles.css';

function Nav() {
  const history = useHistory();
  const { login, authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  function authenticate(event) {
    event.preventDefault();
    login();
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
          <button type="button" onClick={authenticate}>
            login →
          </button>
        </>
      )}
    </div>
  );
}

export default Nav;
