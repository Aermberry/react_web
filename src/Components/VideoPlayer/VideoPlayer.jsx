import React from "react";
import "./VideoPlayer.css";
import video from "../../assets/videos/video.mp4";
import { useRef } from "react";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const videoPlayer = useRef(null);

  const closePlayer = (e) => {
    if (videoPlayer.current.paused) {
      videoPlayer.current.play();
    } else {
      videoPlayer.current.pause();
    }

    if (e.target == player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls ref={videoPlayer}></video>
    </div>
  );
};

export default VideoPlayer;
