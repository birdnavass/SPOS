import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/factura/'

const ComponenteEditarFactura = () => {
    const [fecha, setFecha] = useState("");
    const [monto, setMonto] = useState("");
    const [cliente, setCliente] = useState("");
    const navigate = useNavigate()
    const { id } = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, { fecha: fecha, monto: monto, cliente: cliente })
        navigate('/')
    }

    useEffect(() => {
        getFacturaPorID()
    }, [])

    const getFacturaPorID = async () => {
        const res = await axios.get(URI + id)
        setFecha(res.data.fecha)
        setMonto(res.data.monto)
        setCliente(res.data.cliente)
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-8 text-center">Actulizar Factura</h2>
                <form onSubmit={update}>
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
                            <i className="fas fa-sync-alt mr-2"></i>
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default ComponenteEditarFactura