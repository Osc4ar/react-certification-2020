import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthProvider from './Auth';

describe('Authentication', () => {
  it('Load context', () => {
    render(
      <AuthProvider>
        <h1>Title rendered</h1>
      </AuthProvider>
    );

    expect(screen.getByText('Title rendered')).toBeTruthy();
  });
});
