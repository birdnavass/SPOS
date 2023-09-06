import "./App.css";
import Menu from "./components/menu";
import Formulario from "./components/formulario";
import Menus from "./components/menus";
import Productos from "./components/productos";
import Ventas from "./components/ventas";
import Caja from "./components/caja";
import Recibos from "./components/recibos";
import Control from "./components/control";
import Inicio from "./components/inicio";
import Registros from "./components/registros";

import { useEffect, useState } from "react";
import Web3 from "web3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import smartContractRegistro from "./components/contracts/pos.json";

function App() {
  const [Metamask, setMetamask] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [contract, setContract] = useState();
  const [ListarInformacionEstudios, setListarInformacionEstudios] = useState(
    []
  );

  const conectarWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        await window.ethereum.enable();

        const accounts = await web3Instance.eth.getAccounts();
        console.log(accounts[0]);

        setAccount(accounts[0]);

        const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
        const balanceEth = web3Instance.utils.fromWei(balanceWei, "ether");
        console.log(balanceEth);

        setBalance(balanceEth);

        const contractInstance = new web3Instance.eth.Contract(
          smartContractRegistro,
          smartContractRegistro && "0xa9d281dA3B02DF2ffc8A1955c45d801B5726661D"
        );
        setContract(contractInstance);
        // console.log("contractInstance ==>", contractInstance);
      } catch (error) {
        console.error(error);
      }
    } else {
      setMetamask(false);
    }
  };

  const ListarRegistros = async () => {
    // console.log("contract==>", contract);
    if (contract) {
      try {
        const productosRegistrados = await contract.methods
          .contadorProductos()
          .call();
        //console.log("contadorRegistros ==>",contadorRegistros);

        let arrayProductosRegistrados = [];

        for (let i = 0; i <= productosRegistrados; i++) {
          const infoProductos = await contract.methods.productos(i).call();
          //console.log(inforestudio);

          if (infoProductos.nombres != "") {
            const producto = {
              nombre: infoProductos.nombre,
              descripcion: infoProductos.descripcion,
              existencias: infoProductos.existencias,
              caducidad: infoProductos.caducidad,
              precio: infoProductos.precio,
            };
            //console.log(estudio);
            arrayProductosRegistrados.push(producto);
          }
        }
        //console.log(arrayEstudio);
        setListarInformacionEstudios(arrayProductosRegistrados);
      } catch (error) {
        console.error("Error al actualizar valor:", error);
      }
    }
  };

  useEffect(() => {
    ListarRegistros();
  }, [contract]);

  useEffect(() => {
    conectarWallet();
    async function Wallet() {
      if (typeof window.ethereum !== "undefined") {
        console.log("Wallet: SI.");
        setMetamask(true);
      } else {
        console.log("Wallet: NO");
      }
    }
    Wallet();
  }, []);

  return (
    <Router>
      <div>
        {Metamask ? (
          <>
            <Menu
              conectarWallet={conectarWallet}
              direccion={account}
              saldo={balance}
            ></Menu>

            <div className="centro">
              <Routes>
                <Route
                  path="/form"
                  element={
                    <>
                      <Formulario contrato={contract} direccion={account} />
                      <Registros mostrarListados={ListarInformacionEstudios} />
                      {/* <Productos  /> */}
                    </>
                  }
                />
                <Route path="/menu" element={<Menus />} />
                <Route path="/productos" element={<Productos mostrarListados={ListarInformacionEstudios} />} />
                <Route path="/ventas" element={<Ventas />} />
                <Route path="/caja" element={<Caja />} />
                <Route path="/recibos" element={<Recibos />} />
                <Route path="/control" element={<Control />} />
                <Route path="/control" element={<Control />} />
                <Route path="/inicio" element={<Inicio />} />
              </Routes>
            </div>
          </>
        ) : (
          <div>Instala metamask</div>
        )}
      </div>
    </Router>
  );
}

export default App;
