import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import VideoList from './VideoList.component';

describe('Nav', () => {
  it('Renders Video List', () => {
    render(
      <ThemeProvider>
        <VideoList />
      </ThemeProvider>
    );

    expect(screen.getByRole('grid')).toBeTruthy();
  });
});
