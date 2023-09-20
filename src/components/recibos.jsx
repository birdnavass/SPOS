const Recibos = () => {
  return (
    //Modificado por Bladimir Lopez
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <div class="text-xl font-bold mb-4">
          {" "}
          Los recibos digitales generados para cada transacción estarán
          disponibles aquí. Los comerciantes podrán acceder a estos recibos y
          también enviarlos por correo electrónico o SMS a los clientes.
        </div>

        <div class="flex items-center justify-between mb-2">
          <div class="text-lg font-semibold">FACTURAS</div>
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Nueva factura
          </button>
        </div>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">FECHA</th>
              <th class="px-4 py-2 border">MONTO</th>
              <th class="px-4 py-2 border">CLIENTE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border">63</td>
              <td class="px-4 py-2 border">15/09/2023</td>
              <td class="px-4 py-2 border">160.90</td>
              <td class="px-4 py-2 border">Bladimir</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border">94</td>
              <td class="px-4 py-2 border">19/09/2023</td>
              <td class="px-4 py-2 border">65.32</td>
              <td class="px-4 py-2 border">Humberto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Recibos;
