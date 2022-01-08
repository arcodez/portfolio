import React, { useEffect } from "react";
import Header from "../Header";
import { Nav1, Nav2 } from "../Navs";
import Links from "./Links";
import Scripts from "./Scripts";

function Layout1({ children }) {
  useEffect(() => {

  }, []);
  return (
    
    <>
      <Links />
      <div className="perspective effect-rotate-left">
        <div className="container">
          <div className="outer-nav--return" />
          <div id="viewport" className="l-viewport">
            <div className="l-wrapper">
              <Header />
              {/* <Nav1 /> */}
              <div className="l-main-content main-content">{children}</div>
            </div>
          </div>
        </div>
        <Nav2 />
      </div>
      <Scripts />
    </>
  );
}

export default Layout1;
