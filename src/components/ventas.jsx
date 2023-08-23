const Ventas = () => {
    return (
    <div>
        
        <div id="wrapper">
            <div id="content">
                <div class="container">

                    <div class="box G texto centro">
                        Aquí los comerciantes podrán acceder a un registro detallado de las
                        ventas realizadas. Podrían ver información sobre cada transacción, como la fecha, los productos
                        vendidos y el monto total. También podrían encontrar informes y análisis de ventas, como gráficos de
                        tendencias y estadísticas clave.
                    </div>

                    <div class="box G texto">

                        <div class="titulo centro">CORTES</div>

                        <table class="tftable">
                            <thead>
                                <th>FECHA</th>
                                <th>VENDIDO</th>
                                <th>MONTO</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>23/12/2023</td>
                                    <td>76</td>
                                    <td>764</td>
                                </tr>
                                <tr>
                                    <td>24/12/2023</td>
                                    <td>66</td>
                                    <td>1048</td>
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
export default Ventas;