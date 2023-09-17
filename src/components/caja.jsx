import BarraBusqueda from "./searchBar/searchBar";

const Caja = () => {
  return (
    <div>
      <div id="wrapper">
        <div id="content">
          <div className="container">
            <div className="box G texto centro">
              {" "}
              En esta parte, los comerciantes podrán procesar pagos de los
              clientes. Aquí es donde se registrarían los productos que el
              cliente desea comprar, se calcularía el monto total y se llevaría
              a cabo el proceso de pago.
            </div>

            <BarraBusqueda />

            <div className="box G texto centro">
              <div className="titulo centro">FACTURACION</div>

              <table class="min-w-full">
                <thead>
                  <tr>
                    <th class="px-[10rem] py-3 bg-[#3853DA] text-white border-b border-gray-300">
                      ID
                    </th>
                    <th class="px-[10rem] py-3 bg-[#3853DA] text-white border-b border-gray-300">
                      NOMBRE
                    </th>
                    <th class="px-[10rem] py-3 bg-[#3853DA] text-white border-b border-gray-300">
                      PRECIO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      6
                    </td>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      CEPILLO
                    </td>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      2.36
                    </td>
                  </tr>

                  <tr>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      2
                    </td>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      PASTA
                    </td>
                    <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                      2.00
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="px-4 py-2 mt-5 font-bold text-white bg-gray-400 rounded hover:bg-gray-600">PAGAR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Caja;
