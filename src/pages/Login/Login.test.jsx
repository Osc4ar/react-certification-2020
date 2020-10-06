import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import LoginPage from './Login.page';
import AuthProvider from '../../providers/Auth/Auth.provider';

const mockHistoryPush = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Login Page', () => {
  it('Renders Login Page', () => {
    render(
      <ThemeProvider>
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      </ThemeProvider>
    );

    expect(screen.getByText('Welcome back!')).toBeTruthy();
  });

  it('Shows error in Login Page', () => {
    render(
      <ThemeProvider>
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      </ThemeProvider>
    );

    const submit = screen.getByText('login');
    fireEvent.click(submit);

    expect(screen.getByText('Wrong credentials, try again')).toBeTruthy();
  });

  it('Push history if credentials are correct', () => {
    render(
      <ThemeProvider>
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      </ThemeProvider>
    );

    const username = screen.getByPlaceholderText('Username');
    const password = screen.getByPlaceholderText('Password');
    const submit = screen.getByText('login');

    fireEvent.input(username, { target: { value: 'wizeline' } });
    fireEvent.input(password, { target: { value: 'potato' } });
    fireEvent.click(submit);

    expect(mockHistoryPush).toHaveBeenCalledWith('/favorites');
  });
});
