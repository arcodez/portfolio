import Typist from "react-typist";
import { useState, useEffect, useRef } from "react";


function useHover() {
  // Reference to the element we're listen for events from
  const ref = useRef();

  // Hover state management
  const [hovered, setHovered] = useState(false);

  // Event handlers
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  // Simple effect, just bind and unbind the event handlers
  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    /*  ref.current.addEventListener("mouseleave", leave); */
    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
}
export default function About() {
  const [ref, hovered] = useHover();
  return (
    <li className="l-section section" ref={ref}>
      <div className="about">
        <div className="about--banner">
          {hovered && (
            <Typist>
              <h2>
                I Want
                <br />
                To Work
                <br />
                With ReactJs
                <br />
                Technologies
              </h2>
            </Typist>
          )}
          <a href="https://github.com/arcodez?tab=repositories">
            Projects
            <span>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 150 118"
                style={{ enableBackground: "new 0 0 150 118" }}
                xmlSpace="preserve"
              >
                <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                  <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                </g>
              </svg>
            </span>
          </a>
          <img src="assets/img/Typescript.jpg" alt="About Us" width="350" />
        </div>
        <div className="about--options">
          <a href="#0"></a>
          <a href="#0"></a>
          <a href="#0"></a>
        </div>
      </div>
    </li>
  );
}
