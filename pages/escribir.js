import Typewriter from "typewriter-effect";
import Typist from "react-typist";

function escribir() {
  return (
    <div className="text-effect" style={{ textAlign: "center" }}>
      <title>Efecto de Escritura</title>
      <h1>Efecto de Escritura</h1>
      <h2>Primer Ejemplo</h2>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString("A simple yet powerful native javascript")
            .pauseFor(300)
            .deleteChars(10)
            .typeString(
              "<strong>JS</strong> plugin for a cool typewriter effect and "
            )
            .typeString(
              '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
            )
            .pauseFor(1000)
            .start();
        }}
      />
      <Typewriter
        options={{
          strings: ["Hello", "World"],
          autoStart: true,
          loop: true,
        }}
      />
      <h2>Segundo Ejemplo</h2>
      <Typist>
        <span> First Sentence </span>
        <br />
        <div>
          <p> This will be animated after first sentence is complete </p>
        </div>
        Final sentence
      </Typist>
      <Typist>
        <span> First Sentence </span>
        <Typist.Backspace count={8} delay={200} />
        <span> Phrase </span>
      </Typist>
    </div>
  );
}
export default escribir;
