import React, { useState } from "react";
import Swal from "sweetalert2";

const AgregarProductos = (props) => {

  const estadoInicialProductos = {
      name: "",
      categoria: "",
      titulo: "",
      fechaInicio: "",
      fechaFin: "",
    };
  
    const registrarInformacion = async (e) => {
      e.preventDefault();
      console.log(formulario);
  
      try {
        const result = await props.contrato.methods
          .crearRegistro(
            formulario.categoria,
            formulario.fechaInicio,
            formulario.fechaFin,
            formulario.name,
            formulario.titulo
          )
          .send({ from: props.direccion });
        console.log(result);
      } catch (error) {
        console.error(error);
        
      }
    };
  
    const ManejarFormulario = ({ target: { name, value } }) => {
      console.log(name, value);
      setFormulario({ ...formulario, [name]: value });
    };
  
    const [formulario, setFormulario] = useState(estadoInicialProductos);

      

  return (
    <>
      <div className="flex items-center justify-center mb-4 text-3xl font-bold text-black">
        INGRESAR
      </div>
      <div className="container w-12 h-40 p-5 ml-10 mr-10 text-lg bg-white text-justify-center bg-opacity-300" >

{/* <form onSubmit={handleSubmit}>
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
      </form> */}

        
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
