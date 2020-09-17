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
    </div>
  );
}

export default Nav;
