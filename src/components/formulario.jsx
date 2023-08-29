import React, { useState } from "react";

const Formulario = (props) => {

  const estadoInicialFormulario = {
    lugar: "",
    categoria: "",
    titulo: "",
    fechaInicio: "",
    fechaFin: "",
  };

  const registrarInformacion = async (e) => {
    e.preventDefault();
    console.log(formulario);

    try {
      const result = await props.contrato.methods
        .crearRegistro(
          formulario.categoria,
          formulario.fechaInicio,
          formulario.fechaFin,
          formulario.lugar,
          formulario.titulo
        )
        .send({ from: props.direccion });
      console.log(result);
    } catch (error) {
      console.error(error);

    }
  };

  const ManejarFormulario = ({ target: { name, value } }) => {
    console.log(name, value);
    setFormulario({ ...formulario, [name]: value });
  };

  const [formulario, setFormulario] = useState(estadoInicialFormulario);


  return (
    <div>

      <div id="wrapper">
        <div id="content">
          <div className="container">

            <form onSubmit={registrarInformacion} className="formulario">
              <h2>Formulario</h2>
              <label>Lugar de formacion</label>
              <input type="text" id="lugar" name="lugar" onChange={ManejarFormulario} value={formulario.lugar} required></input><br></br>
              <label>Categoria</label>
              <input type="text" id="categoria" name="categoria" onChange={ManejarFormulario} value={formulario.categoria} required></input><br></br>
              <label>Titulo</label>
              <input type="text" id="titulo" name="titulo" onChange={ManejarFormulario} value={formulario.titulo} required></input><br></br>
              <label>Fecha de inicio</label>
              <input type="date" id="fechaInicio" name="fechaInicio" onChange={ManejarFormulario} value={formulario.fechaInicio} required></input><br></br>
              <label>Fecha de finalizacion</label>
              <input type="date" id="fechaFin" name="fechaFin" onChange={ManejarFormulario} value={formulario.fechaFin} required></input><br></br>
              <button className="boton" type="submit">Enviar</button>
            </form>
          </div></div></div></div>
  )
};
export default Formulario;