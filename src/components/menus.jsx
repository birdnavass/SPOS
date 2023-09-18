import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Menus = () => {
  return (
    <div class="flex flex-col h-screen bg-white">
      <div class="flex-1">
        <div class="container mx-auto p-4">
          <div class="grid grid-cols-3 gap-4">
            <Link to="/productos">
              <div class="text-center bg-[#7182C4] text-white font-bold rounded p-20 text-3xl">
                PRODUCTOS
              </div>
            </Link>
            <Link to="/ventas">
              <div class="text-center bg-[#7182C4] text-white font-bold rounded p-20 text-3xl">
                VENTAS
              </div>
            </Link>
            <Link to="/caja">
              <div class="text-center bg-[#7182C4] text-white font-bold rounded p-20 text-3xl">
                CAJA
              </div>
            </Link>
            <Link to="/recibos">
              <div class="text-center bg-[#7182C4] text-white font-bold rounded p-20 text-3xl">
                RECIBOS
              </div>
            </Link>
            <Link to="/control">
              <div class="text-center bg-[#7182C4] text-white font-bold rounded p-16 text-3xl">
                PANEL DE CONTROL
              </div>
            </Link>
            {/* <Link to="">
              <div class="text-center bg-[#7182C4] text-white font-bold rounded p-20 text-3xl">
                CERRAR SESION
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menus;
