const Formulario = () => {
    return (
        <div>
            <h2>Formulario</h2>
            <form className="formulario">
                <label>Lugar de formacion</label>
                <input type="text" name="formacion" required></input><br></br>
                <label>Categoria</label>
                <input type="text" name="categoria" required></input><br></br>
                <label>Titulo</label>
                <input type="text" name="titulo" required></input><br></br>
                <label>Fecha de inicio</label>
                <input type="date" name="inicio" required></input><br></br>
                <label>Fecha de finalizacion</label>
                <input type="date" name="final" required></input><br></br>
                <button className="boton" type="submit">Enviar</button>
            </form>
        </div>
    )
};
export default Formulario;