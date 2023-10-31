import React from "react";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`h-20 flex justify-center items-center font-bold bg-blue-950 text-white text-5xl rounded-3xl border-2 m-2 cursor-pointer select-none flex-1 hover:bg-indigo-700 ${
        esOperador(props.children)
          ? "bg-green-900 hover:bg-orange-700 border-4"
          : null
      }`}
      onClick={() => props.manejarClic(props.children)} //Esta llamando a una funcion
    >
      {props.children}
    </div>
  );
}

export default Boton;
