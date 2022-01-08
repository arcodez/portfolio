import React, { useEffect, useState } from "react";
import Link from "next/link";

function Nav1() {
  return (
    <nav className="l-side-nav">
      <ul className="side-nav">
        <li className="is-active">
          <Link href={"/"}>
            <a>
              <span>Home</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/work">
            <a>
              <span>Works</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a>
              <span>About</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a>
              <span>Contact</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/hire">
            <a>
              <span>Hire Me</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const NavItem = ({ name, children, href, isActive }) => {
  return (
    <li className={isActive && "is-active"}>
      <Link href={href}>
        <a>
          <span>{name}</span>
        </a>
      </Link>
    </li>
  );
};

const NavList = [
  { id: 1, name: "Home", href: "/" },
  { id: 4, name: "Works", href: "/work" },
  { id: 3, name: "About", href: "/about" },
  { id: 5, name: "Contact", href: "/contact" },
  { id: 6, name: "Hire", href: "/hire" },
];

function Nav2({}) {
  const [selected, setSelected] = useState(null);

  /*   const toggle = (e) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  }; */

  /*   useEffect(() => {
    console.log("Nav2");
  }, [selected]); */

  return (
    <ul className="outer-nav">
      {NavList.map((item, index) => (
        <NavItem
          key={item.id}
          {...item}
          // index={index}
          // selected={selected}
          // toggle={toggle}s
        />
      ))}
    </ul>
  );
}

export { Nav1, Nav2 };
