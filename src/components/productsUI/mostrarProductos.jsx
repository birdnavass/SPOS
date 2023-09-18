import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const MostrarProductos = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza una llamada a la API para obtener los productos desde el servidor
    fetch('http://localhost:3000/productos')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data); // Actualiza el estado con los datos de la base de datos
      })
      .catch((error) => {
        console.error('Error al obtener productos: ' + error);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center text-black text-3xl font-bold mb-4">
        INVENTARIO
      </div>

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-[#3853DA] text-white">
            <th className="py-2 text-lg">ID</th>
            <th className="px-10 py-2 text-lg">NOMBRE</th>
            <th className="px-8 py-2 text-lg">DESCRIPCION</th>
            <th className="px-8 py-2 text-lg">EXISTENCIAS</th>
            <th className="px-8 py-2 text-lg">CADUCIDAD</th>
            <th className="px-10 py-2 text-lg">PRECIO</th>
            <th className="py-2 text-lg">ACCIONES</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((product, index) => (
            <tr className=" text-black" key={index}>
              <td className="px-4 py-2 border border-black">{index + 1}</td>
              <td className="py-2 border border-black">
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="text"
                    value={productos[index].nombre}
                    onChange={(e) => props.onEditChange(e, "nombre")}
                    className="py-2 text-sm"
                  />
                ) : (
                  product.nombre
                )}
              </td>
              <td className="py-2 border border-black">
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="text"
                    value={productos[index].descripcion}
                    onChange={(e) => props.onEditChange(e, "descripcion")}
                    className="py-2 text-sm"
                  />
                ) : (
                  product.descripcion
                )}
              </td>
              <td className="py-2 border border-black">
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="number"
                    value={productos[index].existencias}
                    onChange={(e) => props.onEditChange(e, "existencias")}
                    className="py-2 text-sm"
                  />
                ) : (
                  product.existencias
                )}
              </td>
              <td className="py-2 border border-black">
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="date"
                    value={productos[index].caducidad}
                    onChange={(e) => props.onEditChange(e, "caducidad")}
                    className="py-2 text-sm"
                  />
                ) : (
                  product.caducidad
                )}
              </td>
              <td className="py-2 border border-black">
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="number"
                    value={productos[index].precio}
                    onChange={(e) => props.onEditChange(e, "precio")}
                    className="py-2 text-sm"
                  />
                ) : (
                  product.precio
                )}
              </td>

              <td className="py-2 border border-black">
                <td className=" ">
                  {props.editMode && props.editIndex === index ? (
                    <button
                      className=" bg-[#FFD658] rounded-[10px] p-4 text-lg "
                      onClick={() => props.onSaveEdit(index)}
                    >
                      <FontAwesomeIcon icon={faFileCircleCheck} size="2xl" />
                    </button>
                  ) : (
                    <button
                      className="bg-[#FFD658] rounded-[10px] p-4 text-lg "
                      onClick={() => props.onEdit(index)}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
                    </button>
                  )}
                </td>
                <td className="px-2 py-2 ">
                  <button
                    className="bg-[#FFD658] rounded-[10px] p-4 text-lg "
                    onClick={() => props.onDeleteProduct(index)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} size="2xl" />
                  </button>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MostrarProductos;
