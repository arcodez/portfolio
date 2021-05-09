import { useEffect } from "react";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/donation") {
      //alert("Es verdadero");
    }
  }, []);
  return (
    <>
      <div
        style={{
          color: "red",
        }}
      >
        <h1>Hola Cara de Chola</h1>
        <h1>Hola Chao</h1>
        <h1>Hola Mundo</h1>
      </div>
    </>
  );
}

export default index;
