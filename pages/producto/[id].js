import React from "react";
import { useRouter } from "next/router";

function Producto() {
  const router = useRouter();
  const { query } = router;
  const { id, name, price } = query

  return (
    <center>
      <h1>Numero de Factura <b>{id}</b></h1>
      <h2>Nombre: {name}</h2>
      <h2>Precio: {price}$</h2>
    </center>
  );
}

export default Producto;
