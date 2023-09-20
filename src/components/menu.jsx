import icoeth from "./img/etereo.png";
import icomm from "./img/metamask.png";
import Formulario from "./formulario";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import wallet from "./img/wallet.png";

const Menu = (props) => {
  return (
    <div>
      <div className="py-5 text-black bg-[#3853DA] ">
        <div className="contenedor">
          <div className="text-white logo">SivarP0$</div>

          <ul className="flex justify-end">
            {props.direccion ? (
              <></>
            ) : (
              <>
                <button
                  onClick={props.conectarWallet}
                  className="flex bg-[#FFD658] rounded-[10px] p-3 mr-3"
                  value={props.account}
                >
                  Conectar wallet{" "}
                  <>
                    <img className="static icon" src={wallet}></img>{" "}
                  </>{" "}
                </button>{" "}
              </>
            )}

            {props.direccion ? (
              <>
                <table>
                  <tbody>
                    <tr>
                      <td className="flex-row">
                        <img className="icon" src={icomm}></img>{" "}
                        {props.direccion}
                      </td>
                    </tr>
                    <tr>
                      <td className="flex-row">
                        <img src={icoeth}></img> {props.saldo} ETH
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>

      <div class="flex items-center justify-center p-4 bg-[#3853DA] md:space-x-4">
        <div class="md:flex items-center space-x-4">
          <Link class="text-white hover:bg-[#369cb8] p-4" to="/inicio">
            Inicio
          </Link>
          <Link class="text-white hover:bg-[#369cb8] p-4" to="/menu">
            Menu
          </Link>
          <Link class="text-white hover:bg-[#369cb8] p-4" to="/form">
            Formulario
          </Link>
        </div>
      </div>


    </div>
  );
};
export default Menu;
