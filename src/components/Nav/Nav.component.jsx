import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import VideosContext from '../../utils/state/VideosContext';
import { formatVideosList } from '../../utils/youtube';
import useGAPI from '../../utils/hooks/useGAPI';

import './Nav.styles.css';

function Nav() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();
  const { setVideos } = useContext(VideosContext);
  const [keyword, setKeyword] = useState('react');
  const gapi = useGAPI();

  const searchByKeyword = (maxResults = 10) => {
    gapi.client.youtube.search
      .list({
        part: ['snippet'],
        maxResults,
        q: keyword,
        type: ['video'],
      })
      .then(
        function (response) {
          setVideos(formatVideosList(response.result.items));
        },
        function (err) {
          console.error('Execute error', err);
        }
      );
  };

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
      <div>
        <input
          type="text"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button type="button" onClick={() => searchByKeyword(5)}>
          Search
        </button>
      </div>
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
          <Link to="/login">login →</Link>
        </>
      )}
    </div>
  );
}

export default Nav;
