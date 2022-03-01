import React from "react";

import clip from "../video/beach.mp4";

const VideoBg = () => {
  return (
    <>
      <video autoPlay loop muted className="video-bg">
        <source src={clip} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoBg;
