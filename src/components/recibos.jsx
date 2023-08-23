const Recibos = () => {
    return (
    <div>
        
        <div id="wrapper">
            <div id="content">
                <div class="container">

                    <div class="box G texto centro">Los recibos digitales generados para cada transacción estarán
                        disponibles aquí. Los comerciantes podrán acceder a estos recibos y también enviarlos por correo
                        electrónico o SMS a los clientes.</div>

                    <div class="box G texto">
                        <div class="titulo centro">FACTURAS</div>
                        <table class="tftable">
                            <thead>
                                <th>ID</th>
                                <th>FECHA</th>
                                <th>MONTO</th>
                                <th>CLIENTE</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>63</td>
                                    <td>15/09/2023</td>
                                    <td>160.90</td>
                                    <td>Fulano</td>
                                </tr>
                                <tr>
                                    <td>94</td>
                                    <td>19/09/2023</td>
                                    <td>65.32</td>
                                    <td>Mengano</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>

    </div>
    )
};
export default Recibos;