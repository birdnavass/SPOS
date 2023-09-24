import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/factura/";

const ComponenteCrearFactura = () => {
    const [fecha, setFecha] = useState("");
    const [monto, setMonto] = useState("");
    const [cliente, setCliente] = useState("");
    const navigate = useNavigate();

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, { fecha: fecha, monto: monto, cliente: cliente });
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-8 text-center">Nueva Factura</h2>
                <form onSubmit={store}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="fecha">Fecha</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={fecha} onChange={(e) => setFecha(e.target.value)} id="fecha" type="date" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="monto">Monto</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={monto} onChange={(e) => setMonto(e.target.value)} id="monto" type="number" placeholder="$0.00" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="cliente">Cliente</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={cliente} onChange={(e) => setCliente(e.target.value)} id="cliente" type="text" placeholder="Nombre del cliente" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-[#162157] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                            <i className="fas fa-paper-plane mr-2"></i>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ComponenteCrearFactura;
