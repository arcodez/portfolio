import React from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hire from "../components/Hire";
import Intro from "../components/Intro";
import { Nav1, Nav2 } from "../components/Navs";
import Work from "../components/Work";

function index() {
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="HTML5 website template" />
          <meta
            name="keywords"
            content="global, template, html, sass, jquery"
          />
          <meta name="author" content="Bucky Maler" />
    </Head>
      <div className="perspective effect-rotate-left">
        <div className="container">
          <div className="outer-nav--return" />
          <div id="viewport" className="l-viewport">
            <div className="l-wrapper">
              <Header />
              <Nav1 />
              <ul className="l-main-content main-content">
                <Intro />
                <Work />
                <About />
                <Contact />
                <Hire />
              </ul>
            </div>
          </div>
        </div>
        <Nav2 />
      </div>

    </>
  );
}

export default index;
