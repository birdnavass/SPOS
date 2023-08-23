const Caja = () => {
    return (
    <div>
        
        <div id="wrapper">
            <div id="content">
                <div className="container">

                    <div className="box G texto centro"> En esta parte, los comerciantes podrán procesar pagos de los clientes.
                        Aquí es donde se registrarían los productos que el cliente desea comprar, se calcularía el monto
                        total y se llevaría a cabo el proceso de pago.</div>

                    <div className="box G texto centro">
                        <div className="titulo centro">FACTURACION??</div>
                        <table className="tftable">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NOMBRE</th>
                                    <th>PRECIO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>6</td>
                                    <td>Cepillo</td>
                                    <td>2.30</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Pasta</td>
                                    <td>2.00</td>
                                </tr>
                            </tbody>
                            <thead>
                                <th></th>
                                <th></th>
                                <th>4.30</th>
                            </thead>
                        </table>

                        <div className="box P centro">PAGAR</div>
                    </div>

                </div>
            </div>
        </div>

    </div>
    )
};
export default Caja;