import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import SearchVideo from './SearchVideo.component';

describe('Search Video', () => {
  it('Renders SearchVideo component', () => {
    render(
      <ThemeProvider>
        <SearchVideo />
      </ThemeProvider>
    );

    expect(screen.getByPlaceholderText('Type something to search')).toBeTruthy();
  });
});
