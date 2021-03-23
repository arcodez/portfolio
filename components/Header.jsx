import React from "react";

export default function Header() {
  return (
    <header className="header">
      <a className="header--logo" href="#0">
        <img src="react-icon.svg" alt="Global" width="40" />
        <p>Abel</p>
      </a>
      <a href="https://github.com/arcodez?tab=repositories">
        <button className="header--cta cta">More Projects</button>
      </a>
      <div className="header--nav-toggle">
        <span />
      </div>
    </header>
  );
}
