import BarraBusqueda from "./searchBar/searchBar";


const Caja = () => {

  
  return (
    <div>
      <div className="bg-slate-200  h-[60rem] ">
        <div id="">
          <div className="container">
            <div className="container w-40 h-100 p-5 ml-10 mr-10 text-lg bg-white text-justify-center bg-opacity-300">
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
                 
              </table>
              
              
            </div>
            
          </div>
        </div>
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-[34rem] ml-[30rem]">
                Ingresar
              </button>
      </div>
      
    </div>
    
  );
};
export default Caja;
