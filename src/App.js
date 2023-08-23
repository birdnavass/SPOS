import './App.css';
import Menu from './components/menu';
import Formulario from './components/formulario';
import Menus from './components/menus';
import Productos from './components/productos';
import Ventas from './components/ventas';
import Caja from './components/caja';
import Recibos from './components/recibos';
import Control from './components/control';
import Nuevo from './components/nuevo';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import smartContractRegistro from './registro.json';

function App() {
  const [Metamask, setMetamask] = useState(false);

  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [contract, setContract] = useState();

  const conectarWallet = async () => {
    if(typeof window.ethereum !== 'undefined'){

      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        await window.ethereum.enable();

        const accounts = await web3Instance.eth.getAccounts();
        const account = accounts[0];//setea
        console.log(accounts[0]);

        setAccount(accounts[0]);

        const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
        const balanceEth = web3Instance.utils.fromWei(balanceWei, 'ether');
        console.log(balanceEth);

        setBalance(balanceEth);

        const contractInstance = new web3Instance.eth.Contract(
          smartContractRegistro,
          smartContractRegistro && "0x34D44DBc2c73B0eCb4bC738bfB850f92AaB89ae2"
        );
        setContract(contractInstance);
        console.log("contractInstance ==>", contractInstance);

      } catch (error) {
        console.error(error);
      };
    } else {
      setMetamask(false);
    };
  };

  const ListarRegistros = async () =>{
    console.log("contract==>",contract);
    if(contract) {
      try{
        const contadorRegistros = await contract.methods.registroCounter().call();
        console.log("contadorRegistros ==>",contadorRegistros);
      } catch (error) {
        console.error('Error al actualizar valor:',error);
      }
    }
  };

useEffect(() => { ListarRegistros(); }, [contract]);


  useEffect(() => {
    async function Wallet(){
      if(typeof window.ethereum !== 'undefined'){
        console.log("Wallet: SI.");
        setMetamask(true);
      }else{
        console.log("Wallet: NO");
      }
    };
    Wallet();
  }, []);

  return (
    <Router>
        <div>
          {Metamask ?(
            <>
              <Menu conectarWallet = {conectarWallet} direccion = {account} saldo = {balance}></Menu>

              <div className="centro">

                <Routes>
                    <Route path="/form" element={<Formulario />} />
                    <Route path="/menu" element={<Menus />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/ventas" element={<Ventas />} />
                    <Route path="/caja" element={<Caja />} />
                    <Route path="/recibos" element={<Recibos />} />
                    <Route path="/control" element={<Control />} />
                </Routes>
                
              </div>
            </>
          ):(
            <div>Instala metamask
              
            </div>
          )}

        </div>
        </Router>
  );
}

export default App;
