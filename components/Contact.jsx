import React from 'react'

export default function Contact() {
    return (
        <li className="l-section section">
        <div className="contact">
          <div className="contact--lockup">
            <div className="modal">
              <div className="modal--information">
                <p>Pawia 5, 31-154 Kraków, Poland</p>
                <a href="mailto:ouremail@gmail.com">
                  ouremail@gmail.com
                </a>
                <a href="tel:+148126287560">+48 12 628 75 60</a>
              </div>
              <ul className="modal--options">
                <li>
                  <a href="#0">Bēhance</a>
                </li>
                <li>
                  <a href="#0">dribbble</a>
                </li>
                <li>
                  <a href="mailto:ouremail@gmail.com">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    )
}
