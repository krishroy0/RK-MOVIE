import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => (
  <div className="video-bg-container">
    <video autoPlay loop muted playsInline className="video-bg">
      <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-overlay"></div>
  </div>
);

export default VideoBackground; 