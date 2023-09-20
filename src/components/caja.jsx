import BarraBusqueda from "./searchBar/searchBar";

const Caja = () => {
  return (
    <div>
      <div id="wrapper">
        <div id="content">
          <div className="container">
            <div className="container w-12 h-40 p-5 ml-10 mr-10 text-lg bg-white text-justify-center bg-opacity-300">
              {" "}
              En esta parte, los comerciantes podrán procesar pagos de los
              clientes. Aquí es donde se registrarían los productos que el
              cliente desea comprar, se calcularía el monto total y se llevaría
              a cabo el proceso de pago.
            </div>

            <BarraBusqueda />

            <div className="">
              <div className="mt-3 text-lg text-center">FACTURACION</div>
                       
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

              <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-3 ml-[30rem]">
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Caja;
