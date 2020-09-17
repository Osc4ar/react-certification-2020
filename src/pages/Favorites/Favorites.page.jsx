import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Favorites.styles.css';

function FavoritesPage() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="favoritespage">
      <h1>Welcome to your favorites!</h1>
      {authenticated ? (
        <>
          <Link to="/favorites">Here is the list of your favorites →</Link>
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

export default FavoritesPage;
