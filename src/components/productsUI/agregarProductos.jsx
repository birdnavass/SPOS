import React, { useState } from "react";

const AgregarProductos = (props) => {
  return (
    <>
      <form onSubmit={props.onAddProduct}>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-[#3853DA] text-white">
              <th className="px-4 py-2 border border-black text-lg">NOMBRE</th>
              <th className="px-4 py-2 border border-black text-lg ">
                {" "}
                DESCRIPCION
              </th>
              <th className="px-4 py-2 border border-black text-lg ">
                EXISTENCIAS
              </th>
              <th className="px-4 py-2 border border-black text-lg">
                CADUCIDAD
              </th>
              <th className="px-4 py-2 border border-black text-lg">PRECIO</th>
            </tr>
          </thead>
          <tbody>
            <td className="px-4 py-2 border border-black">
              <input
                type="text"
                id="nombre"
                name="nombre"
                onChange={props.onFormChange}
                value={props.producto.nombre}
                className="w-full p-2"
              />
            </td>
            <td className="px-4 py-2 border border-black">
              <input
                type="text"
                id="descripcion"
                name="descripcion"
                onChange={props.onFormChange}
                value={props.producto.descripcion}
                className="w-full p-2 "
              />
            </td>
            <td className="px-4 py-2 border border-black">
              <input
                type="number"
                id="existencias"
                name="existencias"
                onChange={props.onFormChange}
                value={props.producto.existencias}
                className="w-full p-2 "
              />
            </td>
            <td className="px-4 py-2 border border-black">
              <input
                type="date"
                id="caducidad"
                name="caducidad"
                onChange={props.onFormChange}
                value={props.producto.caducidad}
                className="w-full p-2"
              />
            </td>
            <td className="px-4 py-2 border border-black">
              <input
                type="number"
                id="precio"
                name="precio"
                onChange={props.onFormChange}
                value={props.producto.precio}
                className="w-full p-2 "
              />
            </td>
            <td className="px-4 py-2 border border-black">
              <button
                className="block bg-[#FFD658] rounded-[10px] p-4 text-xl font-sans font-medium"
                type="submit">
                AÑADIR
              </button>
            </td>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default AgregarProductos;
