import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Router from "next/router";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function App() {
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
    return actions.order.capture(handlePaySuccesfully());
    
  };
  function handlePaySuccesfully(){
    Router.push('/donation/exito');
  }
  return (
    <>
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
    
    </>
  );
}
