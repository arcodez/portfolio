import useHover from "../hooks/useHover";

function Contact() {
  const [ref, hovered] = useHover();

  return (
    <li className="l-section section section--is-active" ref={ref}>
      <div className="contact">
        <div className="contact--lockup">
          <div className="caja">
            <div className="caja-contenido">
              <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
                Contact Me
              </h1>
              <div className="contact-icons">
                <div>
                  <a
                    href="https://www.linkedin.com/in/abel-rodr%C3%ADguez-b14b30200/"
                    target="_blank"
                  >
                    <img src="assets/img/linkedin.png" alt="Linkedin" />
                    <h2>Linkedin</h2>
                  </a>
                </div>
                <div>
                  <a href="https://t.me/arcodez" target="_blank">
                    <img src="assets/img/telegram.svg" alt="Telegram" />
                    <h2>Telegram</h2>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:abeljesusrodriguez18@gmail.com"
                    target="_blank"
                  >
                    <img src="assets/img/gmail.svg" alt="Gmail" />
                    <h2>Gmail</h2>
                  </a>
                </div>
              </div>
              <div className="progress">
                {hovered && <div className="progress-value"></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Contact;
