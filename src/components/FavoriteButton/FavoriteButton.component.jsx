import React, { useContext } from 'react';
import FavoritesContext from '../../utils/state/FavoritesContext';

function FavoriteButton({ videoId }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const saveFavorites = () => {
    if (favorites.includes(videoId)) {
      setFavorites(favorites.filter((currentId) => currentId !== videoId));
    } else {
      setFavorites([...favorites, videoId]);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <button type="button" onClick={saveFavorites}>
      {favorites.includes(videoId) ? 'Delete from favorites' : 'Add to favorites'}
    </button>
  );
}

export default FavoriteButton;
