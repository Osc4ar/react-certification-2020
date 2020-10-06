import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth/Auth.provider';
import Nav from './Nav.component';

describe('Nav', () => {
  it('Renders Nav component', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <AuthProvider>
            <Nav />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('WizeTube')).toBeTruthy();
  });
});
