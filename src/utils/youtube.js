function formatVideosList(videos) {
  console.log(videos);
  return videos.map((video, index) => {
    return {
      index,
      videoTitle: video.snippet.title,
      videoDescription: video.snippet.description,
      videoImg: video.snippet.thumbnails.default.url,
    };
  });
}

export { formatVideosList };
