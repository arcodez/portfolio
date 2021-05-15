import React from "react";
import Link from "next/link";

function productos({ products }) {
  return (
    <center>
      {products.map((product) => (
        <div key={product.id}>
          <h1>
            {product.id} {product.name}
          </h1>
          <h2>El precio es {product.price}</h2>
          <h3>
            <Link href={`/producto/${product.id}`}>
              <a>Ir al Producto</a>
            </Link>
          </h3>
        </div>
      ))}
    </center>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/data.json");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default productos;
