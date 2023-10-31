import React from "react";
//Se puede usar constante en los casos donde los componentes son mas sencillos

const BotonClear = (props) => {
  return (
    <div
      className="h-20 text-5xl flex w-full bg-red-900 mt-2 justify-center items-center font-bold text-white border-4 cursor-pointer rounded-full hover:bg-yellow-700"
      onClick={props.manejarClear}
    >
      {props.children}
    </div>
  );
};

export default BotonClear;
