import React from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hire from "../components/Hire";
import Intro from "../components/Intro";
import Layout1 from "../components/Layout/Layout1";
import { Nav1, Nav2 } from "../components/Navs";
import Work from "../components/Work";

function index() {
  return (
    <>
      <Layout1>
        <Intro />
      {/*   <Work />
        <About />
        <Contact />
        <Hire /> */}
      </Layout1>
    </>
  );
}

export default index;
