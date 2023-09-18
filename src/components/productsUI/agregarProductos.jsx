import React, { useState } from "react";
import Swal from "sweetalert2";

const AgregarProductos = (props) => {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    existencias: "",
    caducidad: "",
    precio: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Mensaje del servidor
      } else {
        console.error("Error al agregar el producto.");
        Swal.fire({
          title: "Error",
          text: "Hubo un error al agregar el producto.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error de red:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un error de red al agregar el producto.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  return (
    <>
      <div className="flex items-center justify-center text-black text-3xl font-bold mb-4">
        INGRESAR
      </div>
      <form onSubmit={handleSubmit}>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-[#3853DA] text-white">
              <th className="px-4 py-2  text-lg">NOMBRE</th>
              <th className="px-4 py-2  text-lg ">DESCRIPCION</th>
              <th className="px-4 py-2  text-lg ">EXISTENCIAS</th>
              <th className="px-4 py-2  text-lg">CADUCIDAD</th>
              <th className="px-4 py-2  text-lg">PRECIO</th>
            </tr>
          </thead>
          <tbody>
            <td className="px-4 py-2 border border-black">
              <input
                type="text"
                id="nombre"
                name="nombre"
                onChange={handleChange}
                value={producto.nombre}
                className="w-full p-2"
              />
            </td>

            <td className="px-4 py-2 border border-black">
              <input
                type="text"
                id="descripcion"
                name="descripcion"
                onChange={handleChange}
                value={producto.descripcion}
                className="w-full p-2 "
              />
            </td>

            <td className="px-4 py-2 border border-black">
              <input
                type="number"
                id="existencias"
                name="existencias"
                onChange={handleChange}
                value={producto.existencias}
                className="w-full p-2 "
              />
            </td>

            <td className="px-4 py-2 border border-black">
              <input
                type="date"
                id="caducidad"
                name="caducidad"
                onChange={handleChange}
                value={producto.caducidad}
                className="w-full p-2"
              />
            </td>

            <td className="px-4 py-2 border border-black">
              <input
                type="number"
                id="precio"
                name="precio"
                onChange={handleChange}
                value={producto.precio}
                className="w-full p-2 "
              />
            </td>

            <td className="px-4 py-2 border border-black">
              <button
                className="block bg-[#FFD658] rounded-[10px] p-4 text-xl font-sans font-medium"
                type="submit"
              >
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
