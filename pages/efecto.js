import React from "react";
import Head from "next/head"

function efecto() {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="efecto/style.css"/>
    </Head>
     {/*  <div class="contenido__video">
        <video src="video.mp4" autoplay loop muted>
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div> */}
      <h1>DESARROLLO WEB</h1>
      <div class="container">
        <div class="card">
          <div class="title">
            <h1>FRONTEND </h1>
          </div>
          <a href="" class="btn">
            INTRO
          </a>
        </div>
        <div class="card">
          <div class="title">
            <h1>BACKEND </h1>
          </div>
          <a href="" class="btn">
            INTRO
          </a>
        </div>
        <div class="card">
          <div class="title">
            <h1>FULLSTACK </h1>
          </div>
          <a href="" class="btn">
            INTRO
          </a>
        </div>
      </div>
    <script src="efecto/app.js"></script>
    </>
  );
}

export default efecto;
