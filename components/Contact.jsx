import React from "react";
import { about } from "./configs";

export default function Contact() {
  return (
    <li className="l-section section">
      <div className="contact">
        <div className="contact--lockup">
          <div className="modal">
            <div className="modal--information">
              <p>{about.shortDesc}</p>
              <a href={`mailto:${about.email}`}>{about.email}</a>
              <a href={`tel:${about.number}`}>{about.number}</a>
            </div>
            <ul className="modal--options">
              <li>
                <a href="#0">Linkedin</a>
              </li>
              <li>
                <a href="#0">Facebook</a>
              </li>
              <li>
                <a href="#0">Telegram</a>
              </li>
              <li>
                <a href="mailto:ouremail@gmail.com">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
