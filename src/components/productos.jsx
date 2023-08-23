const Productos = () => {
    return (
        <div>

            <div id="wrapper">
                <div id="content">
                    <div className="container">

                        <div className="box G texto centro">En esta sección, los comerciantes podrán administrar su inventario.
                            Pueden agregar nuevos productos, editar los existentes (como cambiar el precio o la descripción) y
                            eliminar productos que ya no ofrecen.</div>

                        <div className="box G texto">
                            <div className="titulo centro">INGRESAR</div>

                            <form>

                                <table className="tftable">

                                    <thead>
                                        <tr>
                                            <th>NOMBRE</th>
                                            <th>DESCRIPCION</th>
                                            <th>EXISTENCIAS</th>
                                            <th>CADUCIDAD</th>
                                            <th>PRECIO</th>
                                            <th>FOTO (URL)</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="text" name="nombre" /></td>
                                            <td><input type="text" name="descripcion" /></td>
                                            <td><input type="text" name="existencias" /></td>
                                            <td><input type="text" name="caducidad" /></td>
                                            <td><input type="text" name="precio" /></td>
                                            <td><input type="text" name="foto" /></td>
                                            <td><button className="boton" type="submit">AÑADIR</button></td>
                                        </tr>
                                    </tbody>

                                </table>

                            </form>

                        </div>

                        <div className="box G texto">
                            <div className="titulo centro">INVENTARIO</div>

                            <table className="tftable">

                                <thead>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Existencias</th>
                                    <th>Caducidad</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>16</td>
                                        <td>Bateria</td>
                                        <td>Deposito portatil de energia.</td>
                                        <td>63</td>
                                        <td>16/15/2025</td>
                                        <td>3.60</td>
                                        <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEUAAADnTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDx+VWpeAAAAJ3RSTlMAAQIFCAkPERQYGi40TVRVVlhZaHR8g4WPl5qdtb7Hys7R19rr7e97kMnEAAAAaklEQVQYV7XOSQKCMBQE0UpQwfkrSJwCKmDf/4YuVOIF7F29VQOA897xs50k1aknmnmfPRfvWptdBjOz29Vs46B6aFx/cEBIEAEIamhWc3EcIRKXhQj/hX47nGvt7x8o07ETANP2210OvABwcxH233o1TgAAAABJRU5ErkJggg==" /></td>
                                    </tr>
                                    <tr>
                                        <td>bla</td>
                                        <td>bla</td>
                                        <td>bla</td>
                                        <td>bla</td>
                                        <td>bla</td>
                                        <td>bla</td>
                                        <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEUAAADnTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDx+VWpeAAAAJ3RSTlMAAQIFCAkPERQYGi40TVRVVlhZaHR8g4WPl5qdtb7Hys7R19rr7e97kMnEAAAAaklEQVQYV7XOSQKCMBQE0UpQwfkrSJwCKmDf/4YuVOIF7F29VQOA897xs50k1aknmnmfPRfvWptdBjOz29Vs46B6aFx/cEBIEAEIamhWc3EcIRKXhQj/hX47nGvt7x8o07ETANP2210OvABwcxH233o1TgAAAABJRU5ErkJggg==" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </div>)
};

export default Productos;