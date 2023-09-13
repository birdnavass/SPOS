import { useEffect, useState } from "react";
import AgregarProducto from "./productsUI/agregarProductos";

import Swal from "sweetalert2";
import MostrarProductos from "./productsUI/mostrarProductos";

import "../css/productos.css";

const Productos = () => {
  const estadoInicialProducto = {
            nombre: "",
          descripcion: "",
          existencias: "",
          caducidad: "",
          precio: "",
  };

          const [producto, setFormulario] = useState(estadoInicialProducto); // Initialize with the initial state

          const [productos, setProductos] = useState([]);

          const ManejarFormulario = ({target: {name, value} }) => {
            setFormulario({ ...producto, [name]: value });
  };

  const handleAddProduct = (e) => {

            e.preventDefault();

          // Required fields check
          if (
          !producto.nombre ||
          !producto.descripcion ||
          !producto.existencias ||
          !producto.caducidad ||
          !producto.precio
          ) {
            Swal.fire({
              title: "Error",
              text: "Por favor, complete todos los campos.",
              icon: "warning",
              confirmButtonText: "OK",
            });
          return;
    }

          // Numeric fields validation
          if (isNaN(Number(producto.existencias)) || isNaN(Number(producto.precio))) {
            Swal.fire({
              title: "Error",
              text: "Los campos Existencias y Precio deben ser números válidos.",
              icon: "error",
              confirmButtonText: "OK",
            });
          return;
    }

          // Check for negative numbers
          if (Number(producto.existencias) < 0 || Number(producto.precio) < 0) {
            Swal.fire({
              title: "Error",
              text: "Los campos Existencias y Precio no pueden ser números negativos.",
              icon: "error",
              confirmButtonText: "OK",
            });
          return;
    }

          // If all validations pass, add the product and reset the form
          setProductos([...productos, producto]);
          setFormulario(estadoInicialProducto);
  };

  const handleDeleteProduct = (index) => {
    const updatedProductos = [...productos];
          updatedProductos.splice(index, 1);
          setProductos(updatedProductos);
  };

          const [editMode, setEditMode] = useState(false);
          const [editIndex, setEditIndex] = useState(-1);

  const handleEdit = (index) => {
            setEditMode(true);
          setEditIndex(index);
  };

  const handleEditChange = (e, field) => {
    const updatedProductos = [...productos];
          updatedProductos[editIndex][field] = e.target.value;
          setProductos(updatedProductos);
  };

  const handleSaveEdit = (index) => {
            setEditMode(false);
          setEditIndex(-1);
    // You can save changes to your backend or update state as needed
  };

          return (
          <div id="wrapper">
            <div id="content">
              <div className="container">

                

                <div className="box G texto">
                  <div className="titulo centro">INGRESAR</div>
                  <AgregarProducto
                    producto={producto}
                    onAddProduct={handleAddProduct}
                    onFormChange={ManejarFormulario}
                  />
                </div>
                <MostrarProductos
                  productos={productos}
                  editMode={editMode}
                  editIndex={editIndex}
                  onEdit={handleEdit}
                  onEditChange={handleEditChange}
                  onSaveEdit={handleSaveEdit}
                  onDeleteProduct={handleDeleteProduct}

                />
              </div>
            </div>
          </div>
          );
};

          export default Productos;
