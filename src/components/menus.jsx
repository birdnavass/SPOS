import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Menus = () => {
    return (
    <div class="flex-col h-screen bg-white">
        <div class="flex-auto">
          <div class="container mx-auto p-4">
            <div class="grid grid-cols-3 gap-4">
              <Link to="/productos"><div class="text-center bg-[#7182C4] text-black p-6 rounded p-10">PRODUCTOS</div></Link>
              <Link to="/ventas"><div class="text-center bg-[#7182C4] text-black p-6 rounded p-10">VENTAS</div></Link>
              <Link to="/caja"><div class="text-center bg-[#7182C4] text-black p-6 rounded p-10">CAJA</div></Link>
              <Link to="/recibos"><div class="text-center bg-[#7182C4] text-black p-6 rounded p-10">RECIBOS</div></Link>
              <Link to="/control"><div class="text-center bg-[#7182C4] text-black p-6 rounded p-10">PANEL DE CONTROL</div></Link>
              <Link to=""><div class="text-center bg-[#7182C4] text-black p-6 rounded p-10">CERRAR SESION</div></Link>
            </div>
          </div>
        </div>
    </div>
    )
};
export default Menus; 