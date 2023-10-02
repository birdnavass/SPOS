import React, { useState } from "react";
import Swal from "sweetalert2";

const AgregarProductos = (props) => {
  console.log("contract==>", props.contract);

  const estadoInicialProductos = {
    name: "",
    description: "",
    stock: "",
    expirationDate: "",
    price: "",
  };

  const registrarInformacion = async (e) => {
    e.preventDefault();
    console.log(producto);

    try {
      const result = await props.contract.methods
        .addProduct(
          producto.name,
          producto.description,
          producto.stock,
          producto.expirationDate,
          producto.price
        )
        .send({ from: props.account });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const ManejarFormulario = ({ target: { name, value } }) => {
    console.log(name, value);
    setProducto({ ...producto, [name]: value });
  };

  const [producto, setProducto] = useState(estadoInicialProductos);
  console.log("====>", props.account);
  return (
    <>
      <div className="flex items-center justify-center mb-4 text-3xl font-bold text-black">
        INGRESAR
      </div>
      <div className="container w-12 h-40 p-5 ml-10 mr-10 text-lg bg-white text-justify-center bg-opacity-300">
        <form onSubmit={registrarInformacion}>
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="bg-[#3853DA] text-white">
                <th className="px-4 py-2 text-lg">NOMBRE</th>
                <th className="px-4 py-2 text-lg ">DESCRIPCION</th>
                <th className="px-4 py-2 text-lg ">EXISTENCIAS</th>
                <th className="px-4 py-2 text-lg">CADUCIDAD</th>
                <th className="px-4 py-2 text-lg">PRECIO</th>
              </tr>
            </thead>
            <tbody>
              <td className="px-4 py-2 border border-black">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={ManejarFormulario}
                  value={producto.name}
                  className="w-full p-2"
                />
              </td>

              <td className="px-4 py-2 border border-black">
                <input
                  type="text"
                  id="description"
                  name="description"
                  onChange={ManejarFormulario}
                  value={producto.description}
                  className="w-full p-2 "
                />
              </td>

              <td className="px-4 py-2 border border-black">
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  onChange={ManejarFormulario}
                  value={producto.stock}
                  className="w-full p-2 "
                />
              </td>

              <td className="px-4 py-2 border border-black">
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  onChange={ManejarFormulario}
                  value={producto.expirationDate}
                  className="w-full p-2"
                />
              </td>

              <td className="px-4 py-2 border border-black">
                <input
                  type="number"
                  id="price"
                  name="price"
                  onChange={ManejarFormulario}
                  value={producto.price}
                  className="w-full p-2 "
                />
              </td>

              <td className="px-4 py-2 border ">
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
      </div>
    </>
  );
};

export default AgregarProductos;

// const [producto, setProducto] = useState({
//   nombre: "",
//   descripcion: "",
//   existencias: "",
//   caducidad: "",
//   precio: "",
// });

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch("http://localhost:3000/productos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(producto),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data.message); // Mensaje del servidor
//     } else {
//       console.error("Error al agregar el producto.");
//       Swal.fire({
//         title: "Error",
//         text: "Hubo un error al agregar el producto.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   } catch (error) {
//     console.error("Error de red:", error);
//     Swal.fire({
//       title: "Error",
//       text: "Hubo un error de red al agregar el producto.",
//       icon: "error",
//       confirmButtonText: "OK",
//     });
//   }
// };

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setProducto({ ...producto, [name]: value });
// };
