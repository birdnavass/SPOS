import React, { useState } from "react";


const AgregarProductos = (props) => {
  const estadoInicialProducto = {
    nombre: "",
    descripcion: "",
    existencias: "",
    caducidad: "",
    precio: "",
  };

  const [producto, setProducto] = useState(estadoInicialProducto);

  const ManejarFormulario = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
    props.onFormChange(e); // Call the onFormChange prop to update the form in the parent component
  };

  return (
    <div>
      <form onSubmit={props.onAddProduct}>
        <table className="tftable">
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>DESCRIPCION</th>
              <th>EXISTENCIAS</th>
              <th>CADUCIDAD</th>
              <th>PRECIO</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  onChange={ManejarFormulario}
                  value={producto.nombre}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="descripcion"
                  name="descripcion"
                  onChange={ManejarFormulario}
                  value={producto.descripcion}
                />
              </td>
              <td>
                <input
                  type="number"
                  id="existencias"
                  name="existencias"
                  onChange={ManejarFormulario}
                  value={producto.existencias}
                />
              </td>
              <td>
                <input
                  type="date"
                  id="caducidad"
                  name="caducidad"
                  onChange={ManejarFormulario}
                  value={producto.caducidad}
                />
              </td>
              <td>
                <input
                  type="number"
                  id="precio"
                  name="precio"
                  onChange={ManejarFormulario}
                  value={producto.precio}
                />
              </td>
              <td>
                <button className="boton" type="submit">
                  AÑADIR
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AgregarProductos;
