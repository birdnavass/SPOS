import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const MostrarProductos = (props) => {
  const [productos, setProductos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    // Realiza una llamada a la API para obtener los productos desde el servidor
    fetch("http://localhost:3000/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data); // Actualiza el estado con los datos de la base de datos
      })
      .catch((error) => {
        console.error("Error al obtener productos: " + error);
      });
  }, []);

  const onEditChange = (e, field) => {
    const updatedProduct = { ...editedProduct };
    updatedProduct[field] = e.target.value;
    setEditedProduct(updatedProduct);
  };

  const onEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setEditedProduct({ ...productos[index] });
  };

  const onSaveEdit = (index) => {
    // Realizar una solicitud PUT para guardar los cambios en la base de datos
    fetch(`http://localhost:3000/productos/${productos[index].id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setEditMode(false);
        setEditIndex(null);
        // No necesitas restablecer editedProduct a un objeto vacío aquí
        // Actualiza la lista de productos después de la edición
        const updatedProducts = [...productos];
        updatedProducts[index] = data;
        setProductos(updatedProducts);
      })
      .catch((error) => {
        console.error("Error al guardar la edición: " + error);
      });
  };

  const onDeleteProduct = (index) => {
    // Realizar una solicitud DELETE para eliminar el producto de la base de datos
    fetch(`http://localhost:3000/productos/${productos[index].id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Elimina el producto de la lista después de la eliminación
        const updatedProducts = [...productos];
        updatedProducts.splice(index, 1);
        setProductos(updatedProducts);
      })
      .catch((error) => {
        console.error("Error al eliminar el producto: " + error);
      });
  };

  return (
    <>
      <div className="container flex p-5 ml-10 mr-10 text-lg bg-white text-justify-center bg-opacity-300">
        <div className="flex items-center justify-center mb-4 text-3xl font-bold text-black">
          INVENTARIO
        </div>

        <table className="w-full border-collapse table-auto">
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
              <tr className="text-black " key={index}>
                <td className="px-4 py-2 border border-black">{index + 1}</td>
                <td className="py-2 border border-black">
                  {editMode && editIndex === index ? (
                    <input
                      type="text"
                      value={editedProduct.nombre}
                      onChange={(e) => onEditChange(e, "nombre")}
                      className="py-2 text-sm"
                    />
                  ) : (
                    product.nombre
                  )}
                </td>
                <td className="py-2 border border-black">
                  {editMode && editIndex === index ? (
                    <input
                      type="text"
                      value={editedProduct.descripcion}
                      onChange={(e) => onEditChange(e, "descripcion")}
                      className="py-2 text-sm"
                    />
                  ) : (
                    product.descripcion
                  )}
                </td>
                <td className="py-2 border border-black">
                  {editMode && editIndex === index ? (
                    <input
                      type="number"
                      value={editedProduct.existencias}
                      onChange={(e) => onEditChange(e, "existencias")}
                      className="py-2 text-sm"
                    />
                  ) : (
                    product.existencias
                  )}
                </td>
                <td className="py-2 border border-black">
                  {editMode && editIndex === index ? (
                    <input
                      type="date"
                      value={editedProduct.caducidad}
                      onChange={(e) => onEditChange(e, "caducidad")}
                      className="py-2 text-sm"
                    />
                  ) : (
                    product.caducidad
                  )}
                </td>
                <td className="py-2 border border-black">
                  {editMode && editIndex === index ? (
                    <input
                      type="number"
                      value={editedProduct.precio}
                      onChange={(e) => onEditChange(e, "precio")}
                      className="py-2 text-sm"
                    />
                  ) : (
                    product.precio
                  )}
                </td>

                <td className="py-2 border border-black">
                  <td className="">
                    {editMode && editIndex === index ? (
                      <button
                        className=" bg-[#FFD658] rounded-[10px] p-4 text-lg "
                        onClick={() => onSaveEdit(index)}
                      >
                        <FontAwesomeIcon icon={faFileCircleCheck} size="2xl" />
                      </button>
                    ) : (
                      <button
                        className="bg-[#FFD658] rounded-[10px] p-4 text-lg "
                        onClick={() => onEdit(index)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
                      </button>
                    )}
                  </td>
                  <td className="px-2 py-2 ">
                    <button
                      className="bg-[#FFD658] rounded-[10px] p-4 text-lg "
                      onClick={() => onDeleteProduct(index)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} size="2xl" />
                    </button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MostrarProductos;
