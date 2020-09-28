import React from 'react';

const FavoritesContext = React.createContext({
  favorites: [],
  setFavorites: () => {},
});

export default FavoritesContext;
