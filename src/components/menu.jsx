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
            <div className="bg-gray-[#333] text-white py-5">

                <div className='contenedor'>

                    <div className="logo">SivarP0$</div>

                    <ul className="menu">
                        {props.direccion ? (<></>) : (<><button onClick={props.conectarWallet} className="boton" value={props.account}>Conectar wallet</button></>)}

                        {props.direccion ? (<><table>
                        <tbody>
                            <tr>
                                <td className='flex-row'><img className='icon' src={icomm}></img> {props.direccion}</td>
                            </tr>
                            <tr>
                                <td className='flex-row'><img src={icoeth}></img> {props.saldo} ETH</td>
                            </tr>
                        </tbody>
                    </table></>) : (<></>)}
                    </ul>

                </div>

            </div>

            <div className="">

                <div className='bg-[#1d1d1d]'>

                    <ul className="flex gap-5 p-4 max-w-[90%] mx-auto text-white font-medium">
                        <li><Link className='hover:bg-[#369cb8] p-4' to="/inicio">Inicio</Link></li>
                        <li><Link className='hover:bg-[#369cb8] p-4'to="/menu">Menu</Link></li>
                        <li><Link className='hover:bg-[#369cb8] p-4'to="/form">Formulario</Link></li>
                    </ul>

                    

                </div>
            </div>

        </div>
    )
};
export default Menu;
