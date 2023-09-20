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
      <div class="max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <div class="text-xl font-bold mb-4">
          {" "}
          Los recibos digitales generados para cada transacción estarán
          disponibles aquí. Los comerciantes podrán acceder a estos recibos y
          también enviarlos por correo electrónico o SMS a los clientes.
        </div>

        <div class="flex items-center justify-between mb-2">
          <div class="text-lg font-semibold">FACTURAS</div>
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Nueva factura
          </button>
        </div>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">FECHA</th>
              <th class="px-4 py-2 border">MONTO</th>
              <th class="px-4 py-2 border">CLIENTE</th>
            </tr>
          </thead>
          <tbody>
            {factura.map((datos) => (
              <tr key={datos.id}>
                <td class="px-4 py-2 border">{datos.id}</td>
                <td class="px-4 py-2 border">{datos.fecha}</td>
                <td class="px-4 py-2 border">{datos.monto}</td>
                <td class="px-4 py-2 border">{datos.cliente}</td>
                <td>
                  
                  <Link to={`/edit/${datos.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <i className="fas fa-edit mr-2"></i>EDITAR
                  </Link>

                  <button onClick={() => deleteFactura(datos.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <i className="fas fa-trash-alt mr-2"></i>ELIMINAR
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
