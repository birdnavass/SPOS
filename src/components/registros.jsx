const Registros = (props) => {

    // console.log("props en listar registros =>", props.mostrarListados);

    return (
        <div>

            <div id="wrapper">
                <div id="content">
                    <div className="container">


                        <div className="texto">
                            <table className="tftable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Formacion</th>
                                        <th>Categoria</th>
                                        <th>Titulo</th>
                                        <th>Inicio</th>
                                        <th>Fin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {props.mostrarListados.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.lugarDeFormacion}</td>
                                            <td>{item.categoria}</td>
                                            <td>{item.tituloEstudio}</td>
                                            <td>{item.fechaInicio}</td>
                                            <td>{item.fechaFin}</td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
};

export default Registros;