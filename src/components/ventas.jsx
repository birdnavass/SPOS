const Ventas = () => {
    return (
    <div>
        
        <div id="wrapper">
            <div id="content">
                <div class="container">

                    <div className="container w-12 h-40 p-5 ml-10 mr-10 text-lg bg-white text-justify-center bg-opacity-300">
                        Aquí los comerciantes podrán acceder a un registro detallado de las
                        ventas realizadas. Podrían ver información sobre cada transacción, como la fecha, los productos
                        vendidos y el monto total. También podrían encontrar informes y análisis de ventas, como gráficos de
                        tendencias y estadísticas clave.
                    </div>
                    <div className="font-sans text-[2rem]">CORTES</div>
                    
                    <div  className="bg-white bg-opacity-300 container h-25  rounded-xl center w-12 flex max-w-[74rem] mx-60 ">

                    <table class="min-w-full">
                <thead>
                  <tr>
                    <th class="px-[10rem] py-3 bg-[#3853DA] text-white border-b border-gray-300">
                      FECHA
                    </th>
                    <th class="px-[10rem] py-3 bg-[#3853DA] text-white border-b border-gray-300">
                      VENDIDO
                    </th>
                    <th class="px-[10rem] py-3 bg-[#3853DA] text-white border-b border-gray-300">
                      MONTO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      23/12/2023
                    </td>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      76
                    </td>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      756
                    </td>
                  </tr>

                  <tr>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      24/12/2023
                    </td>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      66
                    </td>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      1056
                    </td>
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