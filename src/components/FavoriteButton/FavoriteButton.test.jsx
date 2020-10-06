import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import AuthProvider from '../../providers/Auth/Auth.provider';
import FavoriteButton from './FavoriteButton.component';

describe('Favorite Button', () => {
  it('Renders Favorite Button component', () => {
    render(
      <ThemeProvider>
        <AuthProvider>
          <FavoriteButton />
        </AuthProvider>
      </ThemeProvider>
    );

    expect(screen.getByRole('button')).toBeTruthy();
  });
});
