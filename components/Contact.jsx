import React from "react";
import { about } from "./configs";

export default function Contact() {
  return (
    <li className="l-section section">
      <div className="contact">
        <div className="contact--lockup">
          <div className="caja">
            <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
              Contact Me
            </h1>
            <div className="contact-icons">
              <div>
                <img src="assets/img/linkedin.svg" alt="Linkedin" />
                <h2>Linkedin</h2>
              </div>
              <div>
                <img src="assets/img/facebook.svg" alt="Facebook" />
                <h2>Facebook</h2>
              </div>
              <div>
                <img src="assets/img/telegram.svg" alt="Telegram" />
                <h2>Telegram</h2>
              </div>
              <div>
                <img src="assets/img/gmail.svg" alt="Gmail" />
                <h2>Gmail</h2>
              </div>
            </div>
            <div className="progress">
              <div className="progress-value"></div>
            </div>
          </div>
          {/* <div className="modal">
            <div className="modal--information">
              <p>{about.shortDesc}</p>
              <a href={`mailto:${about.email}`}>{about.email}</a>
              <a href={`tel:${about.number}`}>{about.number}</a>
            </div>
            <ul className="modal--options">
              <a href="" className="button1">
                Linkedin
              </a>
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
          </div> */}
        </div>
      </div>
    </li>
  );
}
