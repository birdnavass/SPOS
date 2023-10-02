import AgregarProducto from "./agregarProductos";
import MostrarProductos from "./mostrarProductos";

const Productos = (props) => {
  return (
    <div id="wrapper">
      <div id="content">
        <div className="container">
          <AgregarProducto
            contract={props.contract}
            conectarWallet={props.conectarWallet}
            account={props.account}
            saldo={props.balanceshow}
          />

          <MostrarProductos
            contract={props.contract}
            account={props.account}
          />
        </div>
      </div>
    </div>
  );
};

export default Productos;
