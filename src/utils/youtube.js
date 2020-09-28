function formatVideosList(videos) {
  console.log(videos);
  return videos.map((video) => {
    return {
      videoId: video.id.videoId,
      videoTitle: video.snippet.title,
      videoDescription: video.snippet.description,
      videoImg: video.snippet.thumbnails.default.url,
    };
  });
}

export { formatVideosList };
