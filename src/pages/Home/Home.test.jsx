import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import HomePage from './Home.page';

describe('Home Page', () => {
  it('Renders Home Page with Video List', () => {
    render(
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    );

    expect(screen.getByRole('grid')).toBeTruthy();
  });
});
