import React, { useContext } from 'react';
import { IconButton } from '@chakra-ui/core';
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
    <IconButton
      aria-label={
        favorites.includes(videoId) ? 'Delete from favorites' : 'Add to favorites'
      }
      icon={favorites.includes(videoId) ? 'delete' : 'star'}
      variantColor={favorites.includes(videoId) ? 'red' : 'teal'}
      onClick={saveFavorites}
      disabled={!authenticated}
      maxWidth="30px"
    />
  );
}

export default FavoriteButton;
