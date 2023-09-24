import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/factura/";

const ComponenteMostrarFactura = () => {
  const [factura, setFactura] = useState([]);
  useEffect(() => {
    getFactura();
  }, []);

  //procedimineto para mostrar todos las facturas
  const getFactura = async () => {
    const respuesta = await axios.get(URI);
    setFactura(respuesta.data);
  };

  //procedimineto para eliminar una factura
  const deleteFactura = async (id) => {
    await axios.delete(`${URI}${id}`);
    getFactura();
  };

  return (
    //Modificado por Bladimir Lopez
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <div className="text-xl font-bold mb-4">
          {" "}
          Los recibos digitales generados para cada transacción estarán
          disponibles aquí. Los comerciantes podrán acceder a estos recibos y
          también enviarlos por correo electrónico o SMS a los clientes.
        </div>

        <div className="flex items-center justify-between mb-2">
          <div className="text-lg font-semibold">FACTURAS</div>
          <Link to="/factura/crearFactura"
            className="bg-[#253791] hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded-lg flex items-center justify-center">
            <i className="fas fa-plus mr-1"></i>
            Nueva factura
          </Link>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">FECHA</th>
              <th className="px-4 py-2 border">MONTO</th>
              <th className="px-4 py-2 border">CLIENTE</th>
              <th className="px-4 py-2 border"></th>
            </tr>
          </thead>
          <tbody>
            {factura.map((datos) => (
              <tr key={datos.id}>
                <td className="px-4 py-2 border">{datos.id}</td>
                <td className="px-4 py-2 border">{datos.fecha}</td>
                <td className="px-4 py-2 border">{datos.monto}</td>
                <td className="px-4 py-2 border">{datos.cliente}</td>
                <td className="px-4 py-2 border flex justify-center items-center space-x-4">
                  <Link
                    to={`/factura/modificarFactura/${datos.id}`}
                    className="bg-[#162157] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                  >
                    <i className="fas fa-edit mr-2"></i>
                  </Link>

                  <button
                    onClick={() => deleteFactura(datos.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center cursor-not-allowed opacity-50" disabled
                  >
                    <i className="fas fa-trash-alt mr-2"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComponenteMostrarFactura;
