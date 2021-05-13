import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Router from "next/router";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function App() {
  const [price, setPrice] = useState(0);
  const [opcion, setOpcion] = useState(5);

  /* Cambiar valor por dependencia */
  useEffect(() => {
    if (opcion != "other") {
      setPrice(opcion);
    }
  }, [opcion]);

  /* Funciones De Paypal */
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture(Router.push('/donation/exito'));
    
  };

  function handleChange(e) {
    setPrice(e.target.value);
  }
  function handleCambio(e) {
    setOpcion(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="app">
        <center>
          <img src="assets/img/nuclear.svg" width="150" className="rotate" />
          <div className="wrapper">
            <h2>Me estas Donando {price} $</h2>

            {/* Options */}
            <div className="opciones">
              <form onSubmit={handleSubmit}>
                <label className="select" htmlFor="slct">
                  <select
                    id="slct"
                    required="required"
                    onChange={handleCambio}
                    value={opcion}
                  >
                    <option value disabled="disabled" selected="selected">
                      Select option
                    </option>
                    <option value="5">5$ ¡GRACIAS!</option>
                    <option value="10">10$ ¡ARIGATOU GOSAIMASU!</option>
                    <option value="20">20$ ¡HOY SE COME!</option>
                    <option value="other">Other Amount</option>
                  </select>
                  <svg>
                    <use xlinkHref="#select-arrow-down" />
                  </svg>
                </label>
                {/* SVG Sprites*/}
                <svg className="sprites">
                  <symbol id="select-arrow-down" viewBox="0 0 10 6">
                    <polyline points="1 1 5 5 9 1" />
                  </symbol>
                </svg>
              </form>
              {/* Boton De Paypal */}
              {opcion === "other" && (
                <>
                  <h2>Otro Monto</h2>
                  <input
                    type="text"
                    style={{ width: "100%" }}
                    className="texto"
                    onChange={handleChange}
                    value={price}
                  ></input>
                </>
              )}
            </div>

            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
            <div className="opciones">
              <a href="https://portfolio.arcodez.vercel.app" target="_blank" className="myButton">
                PortFolio Arcodez
              </a>
              <a href="https://github.com/arcodez" target="_blank" className="myButton">
                GitHub Arcodez
              </a>
            </div>
          </div>
        </center>
      </div>
      {/* Estilos */}
      <style global jsx>{`
        body {
          background: #373b44; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #4286f4,
            #373b44
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #4286f4,
            #373b44
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        .texto {
          font-size: 20px;
          padding: 13px;
        }
        .opciones {
          margin: 25px;
          width: 63%;
        }
        .rotate {
          animation: rotation 8s infinite linear;
        }
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }

        .app {
          aling-items: center;
          width: 90%;
          margin: auto auto 40px;
          heigth: 90%;
          overflow: hidden;
        }
        .wrapper {
          background-color: lightgray;
          padding: 20px;
          border-radius: 10px;
        }

        * {
          box-sizing: border-box;
        }
        .select {
          position: relative;
          min-width: 200px;
        }
        .select svg {
          position: absolute;
          right: 12px;
          top: calc(50% - 3px);
          width: 10px;
          height: 6px;
          stroke-width: 2px;
          stroke: #9098a9;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          pointer-events: none;
        }
        .select select {
          -webkit-appearance: none;
          padding: 7px 40px 7px 12px;
          width: 100%;
          border: 1px solid #e8eaed;
          border-radius: 5px;
          background: #fff;
          box-shadow: 0 1px 3px -2px #9098a9;
          cursor: pointer;
          font-family: inherit;
          font-size: 16px;
          transition: all 150ms ease;
        }
        .select select:required:invalid {
          color: #5a667f;
        }
        .select select option {
          color: #223254;
        }
        .select select option[value=""][disabled] {
          display: none;
        }
        .select select:focus {
          outline: none;
          border-color: #07f;
          box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
        }
        .select select:hover + svg {
          stroke: #07f;
        }
        .sprites {
          position: absolute;
          width: 0;
          height: 0;
          pointer-events: none;
          user-select: none;
        }

        .myButton {
          margin: 5px;
          width: 100%;
          box-shadow: 0px 0px 0px 2px #42588f;
          background: linear-gradient(to bottom, #7892c2 5%, #0f7bff 100%);
          background-color: #7892c2;
          border-radius: 10px;
          border: 1px solid #248267;
          display: inline-block;
          cursor: pointer;
          color: #ffffff;
          font-family: Arial;
          font-size: 19px;
          padding: 12px 37px;
          text-decoration: none;
          text-shadow: 0px 1px 0px #3e69d6;
        }
        .myButton:hover {
          background: linear-gradient(to bottom, #0f7bff 5%, #7892c2 100%);
          background-color: #0f7bff;
        }
        .myButton:active {
          position: relative;
          top: 1px;
        }
      `}</style>
    </>
  );
}
