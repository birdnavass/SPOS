import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Menus = () => {
    return (
    <div>

        <div id="wrapper">
            <div id="content">
                <div className="container">

                        <Link to="/productos"><div className="box P texto centro">PRODUCTOS</div></Link>
                        <Link to="/ventas"><div className="box P texto centro">VENTAS</div></Link>
                        <Link to="/caja"><div className="box P texto centro">CAJA</div></Link>
                        <Link to="/recibos"><div className="box P texto centro">RECIBOS</div></Link>
                        <Link to="/control"><div className="box P texto centro">PANEL DE CONTROL</div></Link>
                        <Link to=""><div className="box P texto centro">CERRAR SESION</div></Link>

                </div>
            </div>
        </div>

    </div>
    )
};
export default Menus; 