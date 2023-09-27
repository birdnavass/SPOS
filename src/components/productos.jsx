import AgregarProducto from "./productsUI/agregarProductos";
import MostrarProductos from "./productsUI/mostrarProductos";

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
