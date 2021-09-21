import React from "react";
import ReactPlayer from "react-player/youtube";

export default function YoutubePage() {
  return (
    <div>
      <ReactPlayer
        url="https://youtu.be/ljnf9DK59kI"
        width={800}
        height={600}
        playing={true}
        muted={true}
        controls={true}
      />
    </div>
  );
}
