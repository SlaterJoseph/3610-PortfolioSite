window.addEventListener('DOMContentLoaded', (event) => {
  const mediaContainer = document.getElementById('mediaContainer');
  const video = document.createElement('video');
  const image = document.createElement('img');

  video.controls = true;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;

  const videoSource = document.createElement('source');
  videoSource.src = 'sea.mp4';
  videoSource.type = 'video/mp4';
  video.appendChild(videoSource);

  video.onerror = function() {
    // Fallback to GIF
    image.src = 'sea.gif';
    mediaContainer.appendChild(image);
  };

  mediaContainer.appendChild(video);
});
