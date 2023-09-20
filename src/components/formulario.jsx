import React, { useState } from "react";

const Formulario = (props) => {

  return (
    <>

      <div id="wrapper">
        <div id="content">
          <div className="container flex-none">

            <div className="max-w-md p-6 mx-auto mt-5 bg-white rounded shadow-md">

            <form onSubmit={props.registrarInformacion} className="formulario">
              <h2>Añadir usuario</h2>
              <input placeholder="Nombre" type="text" id="title" name="title" onChange={props.ManejarFormulario} value={props.formulario.title} required></input><br></br>
              <input placeholder="Direccion" type="text" id="description" name="description" onChange={props.ManejarFormulario} value={props.formulario.description} required></input><br></br>
              <button className="boton" type="submit">Añadir</button>
            </form>
            </div>
            <div className="container flex w-4 bg-slate-50 ">
            <table className=''>
              <thead>
                <tr>
                  <th className="px-[2rem] py-3 bg-[#3853DA] text-white border-b border-gray-300">Rol</th>
                  <th className="px-[2rem] py-3 bg-[#3853DA] text-white border-b border-gray-300">Nombre</th>
                  <th className="px-[2rem] py-3 bg-[#3853DA] text-white border-b border-gray-300">Direccion</th>
                </tr>
              </thead>
              <tbody>

                {props.ListarInformacion.map((item) => (

                  <tr key={item.id}>
                    <td><button className="boton" onClick={() => props.cambioEstadoTarea(item.id)}>
                      {item.done ? 'Gerente' : 'Cajero'}
                    </button></td>
                    <td><input placeholder={item.title} /></td>
                    <td><input placeholder={item.description} /></td>
                  </tr>

                ))}

              </tbody>
            </table>
            </div>      

          </div></div></div>
    </>
  )
};
export default Formulario;