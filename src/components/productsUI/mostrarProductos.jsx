import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan, faPenToSquare, faFileCircleCheck} from "@fortawesome/free-solid-svg-icons";

const MostrarProductos = (props) => {
  const [productos, setProductos] = useState([]);
  const contratoProductos = props.contract;

  const ListarProductos = async () => {
    console.log("contract==>", contratoProductos);
    if (contratoProductos) {
      try {
        const contadorProductos = await contratoProductos.methods
          .productCount()
          .call();

        let arrayProductos = [];

        for (let i = 1; i <= contadorProductos; i++) {
          const infoProductos = await contratoProductos.methods
            .products(i)
            .call();
          console.log(infoProductos);

          if (infoProductos.name != " ") {
            const nuevoProducto = {
              name: infoProductos.name,
              description: infoProductos.description,
              stock: infoProductos.stock,
              expirationDate: infoProductos.expirationDate,
              price: infoProductos.price,
              id: infoProductos.id,
            };

            arrayProductos.push(nuevoProducto);
          }
        }

        setProductos(arrayProductos);
      } catch (error) {
        console.log("Error al actualizar el valor", error);
      }
    }
  };

  useEffect(() => {
    ListarProductos();
  }, [contratoProductos]);

  const onEdit = async (productId) => {
    try {
      // Llamar al método de edición en tu contrato
      await contratoProductos.methods
        .editProduct(productId /* otros parámetros si es necesario */)
        .send({ from: props.direccion });

      // Actualizar la lista de productos después de la edición
      ListarProductos();
    } catch (error) {
      console.error("Error al editar el producto:", error);
    }
  };

  const onDeleteProduct = async (productId) => {
    try {
      // Llamar al método de eliminación en tu contrato
      await contratoProductos.methods
        .deleteProduct(productId)
        .send({ from: props.direccion });

      // Actualizar la lista de productos después de la eliminación
      ListarProductos();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
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
              <tr className="text-black" key={index}>
                <td className="px-4 py-2 border border-black">{product.id}</td>
                <td className="py-2 border border-black">{product.name}</td>
                <td className="py-2 border border-black">
                  {product.description}
                </td>
                <td className="py-2 border border-black">{product.stock}</td>
                <td className="py-2 border border-black">
                  {product.expirationDate}
                </td>
                <td className="py-2 border border-black">{product.price}</td>
                <td className="py-2 border border-black">
                  <td className="py-2 border border-black">
                    <button
                      className="bg-[#FFD658] rounded-[10px] p-4 text-lg"
                      onClick={() => onEdit(product.id)} // Debes definir la función onEdit
                    >
                      <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
                    </button>
                    <button
                      className="bg-[#FFD658] rounded-[10px] p-4 text-lg"
                      onClick={() => onDeleteProduct(product.id)} // Debes definir la función onDeleteProduct
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


// {productos.map((product, index) => (
//   <tr className="text-black " key={index}>
//     <td className="px-4 py-2 border border-black">{index + 1}</td>
//     <td className="py-2 border border-black">
//       {editMode && editIndex === index ? (
//         <input
//           type="text"
//           value={editedProduct.nombre}
//           onChange={(e) => onEditChange(e, "nombre")}
//           className="py-2 text-sm"
//         />
//       ) : (
//         product.nombre
//       )}
//     </td>
//     <td className="py-2 border border-black">
//       {editMode && editIndex === index ? (
//         <input
//           type="text"
//           value={editedProduct.descripcion}
//           onChange={(e) => onEditChange(e, "descripcion")}
//           className="py-2 text-sm"
//         />
//       ) : (
//         product.descripcion
//       )}
//     </td>
//     <td className="py-2 border border-black">
//       {editMode && editIndex === index ? (
//         <input
//           type="number"
//           value={editedProduct.existencias}
//           onChange={(e) => onEditChange(e, "existencias")}
//           className="py-2 text-sm"
//         />
//       ) : (
//         product.existencias
//       )}
//     </td>
//     <td className="py-2 border border-black">
//       {editMode && editIndex === index ? (
//         <input
//           type="date"
//           value={editedProduct.caducidad}
//           onChange={(e) => onEditChange(e, "caducidad")}
//           className="py-2 text-sm"
//         />
//       ) : (
//         product.caducidad
//       )}
//     </td>
//     <td className="py-2 border border-black">
//       {editMode && editIndex === index ? (
//         <input
//           type="number"
//           value={editedProduct.precio}
//           onChange={(e) => onEditChange(e, "precio")}
//           className="py-2 text-sm"
//         />
//       ) : (
//         product.precio
//       )}
//     </td>

//     <td className="py-2 border border-black">
//       <td className="">
//         {editMode && editIndex === index ? (
//           <button
//             className=" bg-[#FFD658] rounded-[10px] p-4 text-lg "
//             onClick={() => onSaveEdit(index)}
//           >
//             <FontAwesomeIcon icon={faFileCircleCheck} size="2xl" />
//           </button>
//         ) : (
//           <button
//             className="bg-[#FFD658] rounded-[10px] p-4 text-lg "
//             onClick={() => onEdit(index)}
//           >
//             <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
//           </button>
//         )}
//       </td>
//       <td className="px-2 py-2 ">
//         <button
//           className="bg-[#FFD658] rounded-[10px] p-4 text-lg "
//           onClick={() => onDeleteProduct(index)}
//         >
//           <FontAwesomeIcon icon={faTrashCan} size="2xl" />
//         </button>
//       </td>
//     </td>
//   </tr>
// ))}
