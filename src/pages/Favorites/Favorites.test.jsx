import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import FavoritesPage from './Favorites.page';
import AuthProvider from '../../providers/Auth/Auth.provider';

describe('Favorites Page', () => {
  it('Renders Favorites Page', () => {
    render(
      <ThemeProvider>
        <AuthProvider>
          <FavoritesPage />
        </AuthProvider>
      </ThemeProvider>
    );

    expect(screen.getByRole('main')).toBeTruthy();
  });
});
