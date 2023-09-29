import "./App.css";
import Menu from "./components/menu";
import Formulario from "./components/formulario";
import Menus from "./components/menus";
import Productos from "./components/productsUI/productos";
import Ventas from "./components/ventas";
import Caja from "./components/caja";
import Recibos from "./components/recibos";
import Control from "./components/control";
import Inicio from "./components/inicio";
import smartContractRegistro from "./registro.json";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  faTrashCan,
  faPenToSquare,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [Metamask, setMetamask] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [accountshow, setAccountshow] = useState(null);
  const [balanceshow, setBalanceshow] = useState(null);
  const [contract, setContract] = useState();
  const [Gerente, setGerente] = useState();
  const [Cajero, setCajero] = useState();
  const [ListarInformacion, setListarInformacion] = useState([]);

  const conectarWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        await window.ethereum.enable();

        const accounts = await web3Instance.eth.getAccounts();
        console.log(accounts[0]);

        setAccount(accounts[0]);
        setAccountshow(accounts[0].slice(0, 6) + "..." + accounts[0].slice(-4));

        const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
        const balanceEth = web3Instance.utils.fromWei(balanceWei, "ether");
        console.log(balanceEth);

        setBalance(balanceEth);
        setBalanceshow(balanceEth.slice(0, 5));

        const contractInstance = new web3Instance.eth.Contract(
          smartContractRegistro,
          smartContractRegistro && "0x33dBB3Be708e6CCa1622f6362E18d8f6651b1605"
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
    if (contract) {
      try {
        const taskCounter = await contract.methods.taskCounter().call();

        let arrayTarea = [];

        for (let i = 0; i <= taskCounter; i++) {
          const infotarea = await contract.methods.tasks(i).call();

          if (infotarea.title != "") {
            const tarea = {
              title: infotarea.title,
              creatAtl: infotarea.creatAtl,
              id: infotarea.id,
              description: infotarea.description,
              done: infotarea.done,
            };
            //console.log(tarea);
            arrayTarea.push(tarea);
          }
        }
        //console.log(arrayTarea);
        setListarInformacion(arrayTarea);
      } catch (error) {
        console.error("Error al actualizar valor:", error);
      }
    }
  };

  const Autenticacion = async () => {
    if (contract) {
      const taskCounter = await contract.methods.taskCounter().call();
      for (let i = 0; i <= taskCounter; i++) {
        const temp = await contract.methods.tasks(i).call();
        console.log(temp.done);
        if (temp.description == account) {
          setCajero(true);
        }

        if (temp.description == account && temp.done == true) {
          setGerente(true);
        } else {
          //setAcceso(false)
        }
      }
    }
  };

  const estadoInicialFormulario = {
    title: "",
    description: "",
  };

  const registrarInformacion = async (e) => {
    e.preventDefault();
    //console.log(formulario);

    try {
      const result = await contract.methods
        .createTask(formulario.title, formulario.description)
        .send({ from: account });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const ManejarFormulario = ({ target: { name, value } }) => {
    setFormulario({ ...formulario, [name]: value });
  };

  const [formulario, setFormulario] = useState(estadoInicialFormulario);

  const cambioEstadoTarea = async (taskId) => {
    if (contract && account) {
      try {
        await contract.methods.cambioEstado(taskId).send({ from: account });
        ListarRegistros(); // Refresco
      } catch (error) {
        console.error("Error al cambiar estado:", error);
      }
    }
  };

  useEffect(() => {
    ListarRegistros();
  }, [contract]);

  useEffect(() => {
    Autenticacion();
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

  //TODO: PROBANDO EN APP.JS

  const [productos, setProductos] = useState([]);
  const contratoProductos = contract;
  const ListarProductos = async () => {
    console.log("contract==>", contract);
    if (contratoProductos) {
      try {
        const contadorProductos = await contratoProductos.methods
          .productCount()
          .call();

        let arrayProductos = [];

        for (let i = 1; i <= contadorProductos; i++) {
          const infoProductos = await contratoProductos.methods
            .products(i)
            .call();
          console.log(infoProductos);

          if (infoProductos.name != " ") {
            const nuevoProducto = {
              name: infoProductos.name,
              description: infoProductos.description,
              stock: infoProductos.stock,
              expirationDate: infoProductos.expirationDate,
              price: infoProductos.price,
              id: infoProductos.id,
            };

            arrayProductos.push(nuevoProducto);
          }
        }

        setProductos(arrayProductos);
      } catch (error) {
        console.log("Error al actualizar el valor", error);
      }
    }
  };

  useEffect(() => {
    ListarProductos();
  }, [contratoProductos]);

  const onEdit = async (productId) => {
    try {
      // Llamar al método de edición en tu contrato
      await contratoProductos.methods
        .editProduct(productId /* otros parámetros si es necesario */)
        .send({ from: account });

      // Actualizar la lista de productos después de la edición
      ListarProductos();
    } catch (error) {
      console.error("Error al editar el producto:", error);
    }
  };

  const onDeleteProduct = async (productId) => {
    try {
      // Llamar al método de eliminación en tu contrato
      await contratoProductos.methods
        .deleteProduct(productId)
        .send({ from: account });

      // Actualizar la lista de productos después de la eliminación
      ListarProductos();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  const estadoInicialProductos = {
    name: "",
    description: "",
    stocks: "",
    expirationDate: "",
    price: "",
  };

  const registrarInformacionn = async (e) => {
    e.preventDefault();
    console.log(formularioo);

    try {
      const result = await contract.methods
        .addProduct(
          formularioo.name,
          formularioo.description,
          formularioo.stocks,
          formularioo.expirationDate,
          formularioo.price
        )
        .send({ from: account });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const ManejarFormularioo = ({ target: { name, value } }) => {
    console.log(name, value);
    setFormularioo({ ...formularioo, [name]: value });
  };

  const [formularioo, setFormularioo] = useState(estadoInicialProductos);

  return (
    <Router>
      <div>
        <Menu
          conectarWallet={conectarWallet}
          direccion={accountshow}
          saldo={balanceshow}
          Gerente={Gerente}
          Cajero={Cajero}
          Metamask={Metamask}
        ></Menu>

        <div className="centro">
          {Gerente ? (
            <>
              // ! INICIO AGREGAR PRODUCTO
              <div className="flex items-center justify-center mb-4 text-3xl font-bold text-black">
                INGRESAR
              </div>
              <div className="container w-12 h-40 p-5 ml-10 mr-10 text-lg bg-white text-justify-center bg-opacity-300">
                <form onSubmit={registrarInformacionn}>
                  <table className="w-full border-collapse table-auto">
                    <thead>
                      <tr className="bg-[#3853DA] text-white">
                        <th className="px-4 py-2 text-lg">NOMBRE</th>
                        <th className="px-4 py-2 text-lg ">DESCRIPCION</th>
                        <th className="px-4 py-2 text-lg ">EXISTENCIAS</th>
                        <th className="px-4 py-2 text-lg">CADUCIDAD</th>
                        <th className="px-4 py-2 text-lg">PRECIO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <td className="px-4 py-2 border border-black">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={ManejarFormularioo}
                          value={formularioo.name}
                          className="w-full p-2"
                        />
                      </td>

                      <td className="px-4 py-2 border border-black">
                        <input
                          type="text"
                          id="description"
                          name="description"
                          onChange={ManejarFormularioo}
                          value={formularioo.description}
                          className="w-full p-2 "
                        />
                      </td>

                      <td className="px-4 py-2 border border-black">
                        <input
                          type="number"
                          id="stocks"
                          name="stocks"
                          onChange={ManejarFormularioo}
                          value={formularioo.stocks}
                          className="w-full p-2 "
                        />
                      </td>

                      <td className="px-4 py-2 border border-black">
                        <input
                          type="date"
                          id="expirationDate"
                          name="expirationDate"
                          onChange={ManejarFormularioo}
                          value={formularioo.expirationDate}
                          className="w-full p-2"
                        />
                      </td>

                      <td className="px-4 py-2 border border-black">
                        <input
                          type="number"
                          id="price"
                          name="price"
                          onChange={ManejarFormularioo}
                          value={formularioo.price}
                          className="w-full p-2 "
                        />
                      </td>

                      <td className="px-4 py-2 border ">
                        <button
                          className="block bg-[#FFD658] rounded-[10px] p-4 text-xl font-sans font-medium"
                          type="submit"
                        >
                          AÑADIR
                        </button>
                      </td>
                    </tbody>
                  </table>
                </form>
              </div>
              //! FIN AGREGAR PRODUCTO // ! PRUEBA MOSTRAR PRODUCTOS
              <h1>HOLA</h1>
              <>
                <div className="container flex p-5 ml-10 mr-10 text-lg bg-white text-justify-center bg-opacity-300">
                  <div className="flex items-center justify-center mb-4 text-3xl font-bold text-black">
                    INVENTARIO
                  </div>

                  <table className="w-full border-collapse table-auto">
                    <thead>
                      <tr className="bg-[#3853DA] text-white">
                        <th className="py-2 text-lg">ID</th>
                        <th className="px-10 py-2 text-lg">NOMBRE</th>
                        <th className="px-8 py-2 text-lg">DESCRIPCION</th>
                        <th className="px-8 py-2 text-lg">EXISTENCIAS</th>
                        <th className="px-8 py-2 text-lg">CADUCIDAD</th>
                        <th className="px-10 py-2 text-lg">PRECIO</th>
                        <th className="py-2 text-lg">ACCIONES</th>
                      </tr>
                    </thead>

                    <tbody>
                      {productos.map((product, index) => (
                        <tr className="text-black" key={index}>
                          <td className="px-4 py-2 border border-black">
                            {product.id}
                          </td>
                          <td className="py-2 border border-black">
                            {product.name}
                          </td>
                          <td className="py-2 border border-black">
                            {product.description}
                          </td>
                          <td className="py-2 border border-black">
                            {product.stock}
                          </td>
                          <td className="py-2 border border-black">
                            {product.expirationDate}
                          </td>
                          <td className="py-2 border border-black">
                            {product.price}
                          </td>
                          <td className="py-2 border border-black">
                            <td className="py-2 border border-black">
                              <button
                                className="bg-[#FFD658] rounded-[10px] p-4 text-lg"
                                onClick={() => onEdit(product.id)} // Debes definir la función onEdit
                              >
                                <FontAwesomeIcon
                                  icon={faPenToSquare}
                                  size="2xl"
                                />
                              </button>
                              <button
                                className="bg-[#FFD658] rounded-[10px] p-4 text-lg"
                                onClick={() => onDeleteProduct(product.id)} // Debes definir la función onDeleteProduct
                              >
                                <FontAwesomeIcon icon={faTrashCan} size="2xl" />
                              </button>
                            </td>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
              // ! PRUEBA
              <Routes>
                <Route
                  path="/form"
                  element={
                    <>
                      <Formulario
                        registrarInformacion={registrarInformacion}
                        ManejarFormulario={ManejarFormulario}
                        formulario={formulario}
                        ListarInformacion={ListarInformacion}
                        cambioEstadoTarea={cambioEstadoTarea}
                      />
                      {/* <Productos  /> */}
                    </>
                  }
                />
                <Route
                  path="/menu"
                  element={<Menus Gerente={Gerente} Cajero={Cajero} />}
                />
                <Route
                  path="/productos"
                  element={
                    <Productos
                      contract={contract}
                      conectarWallet={conectarWallet}
                      direccion={accountshow}
                      saldo={balanceshow}
                    />
                  }
                />
                <Route path="/ventas" element={<Ventas />} />
                <Route path="/caja" element={<Caja />} />
                <Route path="/recibos" element={<Recibos />} />
                <Route path="/control" element={<Control />} />
                <Route path="/control" element={<Control />} />
                <Route path="/inicio" element={<Inicio />} />
              </Routes>
            </>
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Caja />} />
                <Route path="/caja" element={<Caja />} />
                <Route
                  path="/form"
                  element={
                    <>
                      <Formulario
                        registrarInformacion={registrarInformacion}
                        ManejarFormulario={ManejarFormulario}
                        formulario={formulario}
                        ListarInformacion={ListarInformacion}
                        cambioEstadoTarea={cambioEstadoTarea}
                      />
                      {/* <Productos  /> */}
                    </>
                  }
                />
              </Routes>
            </>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
