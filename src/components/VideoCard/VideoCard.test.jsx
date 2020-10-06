import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import { BrowserRouter } from 'react-router-dom';
import VideoCard from './VideoCard.component';
import getPlaceholders from '../../utils/placeholder_videos';

describe('Video Card', () => {
  it('Renders Video Card', () => {
    const video = getPlaceholders(1)[0];
    render(
      <BrowserRouter>
        <ThemeProvider>{VideoCard(video)}</ThemeProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(video.videoTitle)).toBeTruthy();
  });
});
