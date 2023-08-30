import icoeth from './img/etereo.png';
import icomm from './img/metamask.png';
import Formulario from './formulario';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Menu = (props) => {
    return (
        <div>
            <div className="navbar">

                <div className='contenedor'>

                    <div className="logo">Blockchain</div>

                    <ul className="menu">
                        <button onClick={props.conectarWallet} className="boton" value={props.account}>Conectar wallet</button>
                    </ul>
                  <ul className="menu">
                       <p>Bladimir</p>
                    </ul>

                </div>

            </div>

            <div className="navbarr">

                <div className='contenedor'>
                
                    <ul className="menu">
                        <li><Link  to="/inicio">Inicio</Link></li>
                        <li><Link  to="/menu">Menu</Link></li>
                        <li><Link  to="/form">Formulario</Link></li>
                    </ul>
                    
                    <table>
                        <tbody>
                            <tr>
                                <td className='flex-row'><img className='icon' src={icomm}></img> {props.direccion}</td>
                            </tr>
                            <tr>
                                <td className='flex-row'><img  src={icoeth}></img> {props.saldo} ETH</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
};
export default Menu;
