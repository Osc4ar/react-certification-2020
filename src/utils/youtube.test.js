import { formatVideosList, formatVideosLoadedById } from './youtube';

describe('Format Functions', () => {
  it('Format API videos list from search', () => {
    const videos = [
      {
        id: {
          etag: 'jytiqwueyrtj',
          videoId: '3mnSDifDSxQ',
        },
        snippet: {
          thumbnails: {
            default: {
              url: 'https://picsum.photos/id/230/300/300',
            },
          },
          title: 'wizeline',
          description: 'This is a video',
        },
      },
    ];

    const expectedVideoData = [
      {
        videoId: '3mnSDifDSxQ',
        videoTitle: 'wizeline',
        videoDescription: 'This is a video',
        videoImg: 'https://picsum.photos/id/230/300/300',
      },
    ];

    const actualVideoData = formatVideosList(videos);

    expect(actualVideoData).toEqual(expectedVideoData);
  });

  it('Format API related videos list', () => {
    const videos = [
      {
        id: '3mnSDifDSxQ',
        snippet: {
          thumbnails: {
            default: {
              url: 'https://picsum.photos/id/230/300/300',
            },
          },
          title: 'wizeline',
          description: 'This is a video',
        },
      },
    ];

    const expectedVideoData = [
      {
        videoId: '3mnSDifDSxQ',
        videoTitle: 'wizeline',
        videoDescription: 'This is a video',
        videoImg: 'https://picsum.photos/id/230/300/300',
      },
    ];

    const actualVideoData = formatVideosLoadedById(videos);

    expect(actualVideoData).toEqual(expectedVideoData);
  });
});
