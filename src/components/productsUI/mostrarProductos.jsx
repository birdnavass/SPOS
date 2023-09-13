import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";


const mostrarProductos = (props) => {

  return (
    <div className="box G texto">
      <div className="titulo centro">INVENTARIO</div>

      <table className="tftable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Existencias</th>
            <th>Caducidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {props.productos.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="text"
                    value={props.productos[index].nombre}
                    onChange={(e) => props.onEditChange(e, "nombre")}
                  />
                ) : (
                  product.nombre
                )}
              </td>
              <td>
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="text"
                    value={props.productos[index].descripcion}
                    onChange={(e) => props.onEditChange(e, "descripcion")}
                  />
                ) : (
                  product.descripcion
                )}
              </td>
              <td>
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="number"
                    value={props.productos[index].existencias}
                    onChange={(e) => props.onEditChange(e, "existencias")}
                  />
                ) : (
                  product.existencias
                )}
              </td>
              <td>
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="date"
                    value={props.productos[index].caducidad}
                    onChange={(e) => props.onEditChange(e, "caducidad")}
                  />
                ) : (
                  product.caducidad
                )}
              </td>
              <td>
                {props.editMode && props.editIndex === index ? (
                  <input
                    type="number"
                    value={props.productos[index].precio}
                    onChange={(e) => props.onEditChange(e, "precio")}
                  />
                ) : (
                  product.precio
                )}
              </td>
              <td>
                {props.editMode && props.editIndex === index ? (
                  <button
                    className="botonEditarProductos"
                    onClick={() => props.onSaveEdit(index)}
                  >
                    <FontAwesomeIcon icon={faFileCircleCheck} size="2xl" />
                  </button>
                ) : (
                  <button
                    className="botonEditarProductos"
                    onClick={() => props.onEdit(index)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
                  </button>
                )}
                <button
                  className="botonEditarProductos"
                  onClick={() => props.onDeleteProduct(index)}
                >
                  <FontAwesomeIcon icon={faTrashCan} size="2xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default mostrarProductos;
