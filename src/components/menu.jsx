import icoeth from './img/etereo.png';
import icomm from './img/metamask.png';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Menu = (props) => {
    return (
        <div>
            <div className="py-5 text-black bg-[#3853DA] ">

                <div className='contenedor'>

                    <div className="text-white logo">SivarP0$</div>

                    <ul className="menu">
                    {props.Metamask ? (<>
                    
                        {props.direccion ? (<></>) : (
                            <>
                                <button  onClick={props.conectarWallet} className="boton" value={props.account}  >Conectar wallet</button>
                            </>)}

                        {props.direccion ? (
                            <>
                                <table>
                                    <tbody onClick={props.conectarWallet} className='saldoydireccion'>
                                        <tr>
                                            <td className='flex-row'><img className='icon' src={icomm}></img> {props.direccion}</td>
                                        </tr>
                                        <tr>
                                            <td className='flex-row'><img src={icoeth}></img> {props.saldo} ETH</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>) : (<></>)
                        }

                    </>):(<><button className='boton'>Instala metamask</button></>)}
                        
                    </ul>

                </div>

            </div>

            <div>

                <div className='bg-[#3853DA]'>

                    <ul className="flex justify-start gap-4 p-4 max-w-[90%] mx-auto text-white font-medium ml-[18rem]">

                    {props.Gerente ? (<><li><Link className='hover:bg-[#369cb8] p-4' to="/menu">Dashboard</Link></li></>):(<><li><Link className='hover:bg-[#369cb8] p-4' to="/caja">Caja</Link></li></>)}
                        <li><Link className='hover:bg-[#369cb8] p-4' to="/form">Usuarios</Link></li>
                    </ul>



                </div>
            </div>

        </div>
    )
};
export default Menu;
