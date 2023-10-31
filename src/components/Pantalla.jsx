import React from "react";
//Se puede usar constante en los casos donde los componentes son mas sencillos

const Pantalla = ({input}) => {
  return(
  <div className="h-20 rounded-3xl mb-5 flex justify-end items-center font-bold text-5xl bg-sky-950 text-white pt-3 pr-8 pl-3 pb-3 shadow-2xl border-4">
    {input}
  </div>
  )
}

export default Pantalla;