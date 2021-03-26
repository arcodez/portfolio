import React from "react";

function reproductor() {
  return (
    <>
    <link rel="stylesheet" href="audio.css"/>
      <h1>Javascript Audio Spectrum</h1>
      <div className="div" />
      <div style={{ display: "none" }}>
        <audio
          id="src-vid"
          crossOrigin="anonymous"
          loop
          autoPlay
          controls
          src="https://jr-02.github.io/Algebra_Discreta/multimedia/Tranquillity - Chill Lofi Hip Hop Beat (FREE FOR PROFIT USE).mp3"
          type="video/mp4"
        >
          <p>
            Your browser does not support the <code>audio</code> element.
          </p>
        </audio>
      </div>
      <script src="audio.js"></script>
    </>
  );
}

export default reproductor;
