// src/VideoPlayer.js
import React, { useState } from "react";
import "../components/VideoPlayer.css";

const VideoPlayer = ({ videoId, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-container">
      {isPlaying ? (
        <iframe
          className="video-iframe"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
