import AgregarProducto from "./agregarProductos";
import MostrarProductos from "./mostrarProductos";

const Productos = (props) => {
  return (
    <div id="wrapper">
      <div id="content">
        <div className="container">
          <AgregarProducto  />

          <MostrarProductos />
        </div>
      </div>
    </div>
  );
};

export default Productos;
