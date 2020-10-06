import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFound.page';

describe('Not Found Page', () => {
  it('Renders Not Found Page', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByAltText('page not found')).toBeTruthy();
  });
});
