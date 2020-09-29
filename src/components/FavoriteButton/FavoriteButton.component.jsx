import React, { useContext } from 'react';
import FavoritesContext from '../../utils/state/FavoritesContext';
import { useAuth } from '../../providers/Auth';

function FavoriteButton({ videoId }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const { authenticated } = useAuth();

  const saveFavorites = () => {
    if (favorites.includes(videoId)) {
      setFavorites(favorites.filter((currentId) => currentId !== videoId));
    } else {
      setFavorites([...favorites, videoId]);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <button
      className="favorite-button"
      type="button"
      onClick={saveFavorites}
      disabled={!authenticated}
    >
      {favorites.includes(videoId) ? 'Delete from favorites' : 'Add to favorites'}
    </button>
  );
}

export default FavoriteButton;
