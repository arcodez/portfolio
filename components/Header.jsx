import React from "react";

export default function Header() {
  return (
    <header className="header">
      <a className="header--logo" href="#0">
        <img
          src="react-icon.svg"
          alt="Global"
          width="40"
        />
        <p>Abel</p>
      </a>
      <button className="header--cta cta">Hire Us</button>
      <div className="header--nav-toggle">
        <span />
      </div>
    </header>
  );
}
