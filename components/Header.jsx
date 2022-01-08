import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a className="header--logo">
          <img src="react-icon.svg" alt="Global" width="40" />
          <p>Abel</p>
        </a>
      </Link>

      <a href="https://github.com/arcodez?tab=repositories">
        <button className="header--cta cta">More Projects</button>
      </a>

      <div className="header--nav-toggle">
        <span />
      </div>
    </header>
  );
}
