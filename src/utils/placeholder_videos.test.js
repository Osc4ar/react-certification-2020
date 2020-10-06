import getPlaceholders from './placeholder_videos';

describe('Video Placeholder', () => {
  it('Should create one video', () => {
    const expectedResult = [
      {
        videoId: 'ERROR',
        videoTitle: 'Title',
        videoDescription: 'Description',
        videoImg: 'logo512.png',
      },
    ];

    const actualResult = getPlaceholders(1);

    expect(actualResult).toEqual(expectedResult);
  });
});
