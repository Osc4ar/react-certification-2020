export default function getPlaceholders(numVideos = 9) {
  const videos = [];
  for (let index = 0; index < numVideos; index += 1) {
    videos.push({
      videoId: 'ERROR',
      videoTitle: 'Title',
      videoDescription: 'Description',
      videoImg: 'logo512.png',
    });
  }
  return videos;
}
