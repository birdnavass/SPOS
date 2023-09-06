import icoeth from './img/etereo.png';
import icomm from './img/metamask.png';
import Formulario from './formulario';
import {
    
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import wallet from './img/wallet.png';


const Menu = (props) => {
    return (
        <div>
            <div className="py-5 text-black bg-[#3853DA] ">

                <div className='contenedor'>

                    <div className="text-white logo">SivarP0$</div>

                    <ul className="menu">
                        {props.direccion ? (<></>) : (<><button onClick={props.conectarWallet} className="flex bg-[#FFD658] rounded-[10px] p-3   " value={props.account} >Conectar wallet <><img className='static icon' src={wallet}></img>  </>  </button>        </>)}

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

                <div className='bg-[#3853DA]'>

                    <ul className="flex justify-start gap-4 p-4 max-w-[90%] mx-auto text-white font-medium ml-[18rem] ">
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
