import React from 'react'

function Nav1() {
    return (
        <nav className="l-side-nav">
        <ul className="side-nav">
          <li className="is-active">
            <span>Home</span>
          </li>
          <li>
            <span>Works</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>Hire us</span>
          </li>
        </ul>
      </nav>
    )
}

function Nav2() {
    return (
        <ul className="outer-nav">
          <li className="is-active">Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
          <li>Hire us</li>
        </ul>
    )
}


export { Nav1, Nav2 }
