import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import Layout from './Layout.component';

describe('Layout', () => {
  it('Renders Layout component', () => {
    render(
      <ThemeProvider>
        <Layout>
          <h1>Title rendered</h1>
        </Layout>
      </ThemeProvider>
    );

    expect(screen.getByText('Title rendered')).toBeTruthy();
  });
});
