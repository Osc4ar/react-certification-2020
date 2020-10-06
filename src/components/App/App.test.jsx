import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('App', () => {
  it('Renders App component', () => {
    render(<App />);

    expect(screen.getByText('WizeTube')).toBeTruthy();
  });
});
