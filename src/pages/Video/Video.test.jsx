import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth/Auth.provider';
import VideoPage from './Video.page';

describe('Video Page', () => {
  it('Renders Video Page', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <AuthProvider>
            <VideoPage />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByRole('main')).toBeTruthy();
  });
});
