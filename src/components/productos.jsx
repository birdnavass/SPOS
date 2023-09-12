const Productos = () => {
  return (
    <div>
      <div id="wrapper">
        <div id="content">
          <div className="container">
            <div className="box G texto centro">
              En esta sección, los comerciantes podrán administrar su
              inventario. Pueden agregar nuevos productos, editar los existentes
              (como cambiar el precio o la descripción) y eliminar productos que
              ya no ofrecen.
            </div>

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
                      <td>
                        <input type="text" name="nombre" />
                      </td>
                      <td>
                        <input type="text" name="descripcion" />
                      </td>
                      <td>
                        <input type="text" name="existencias" />
                      </td>
                      <td>
                        <input type="text" name="caducidad" />
                      </td>
                      <td>
                        <input type="text" name="precio" />
                      </td>
                      <td>
                        <input type="text" name="foto" />
                      </td>
                      <td>
                        <button  className="flex bg-[#FFD658] rounded-[10px] p-3 text-center text-lg font-sans font-medium">
                          AÑADIR
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>

            <div className="bg-white bg-opacity-300 container h-20  rounded-xl center w-12 flex max-w-[74rem] mx- ">
              <div className="h-24 -mt-4 text-black-600 center">
                <input
                  className="border-black rounded-full te39xt-sm w-[25rem] h-15 pr-14 bg-red border-5 px-200 focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Buscar"
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 mr-4 mt-7"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56.966 56.966"
                  >
                    <path d="M55.146 50.625l-13.07-13.07c3.164-4.631 4.891-10.215 4.891-16.113C46.967 11.736 36.231 1 23.483 1 10.735 1 0 11.736 0 24.484s10.735 23.483 23.483 23.483c5.898 0 11.482-1.727 16.113-4.891l13.07 13.07c.391.391.902.586 1.414.586s1.023-.195 1.414-.586c.781-.781.781-2.047 0-2.828zM23.483 45.966c-11.045 0-20-8.955-20-20s8.955-20 20-20 20 8.955 20 20-8.955 20-20 20z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="box G texto">
              <div className="titulo centro">INVENTARIO</div>

              <table className="tftable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Existencias</th>
                    <th>Caducidad</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>16</td>
                    <td>Bateria</td>
                    <td>Deposito portatil de energia.</td>
                    <td>63</td>
                    <td>16/15/2025</td>
                    <td>3.60</td>
                    <td>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEUAAADnTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDx+VWpeAAAAJ3RSTlMAAQIFCAkPERQYGi40TVRVVlhZaHR8g4WPl5qdtb7Hys7R19rr7e97kMnEAAAAaklEQVQYV7XOSQKCMBQE0UpQwfkrSJwCKmDf/4YuVOIF7F29VQOA897xs50k1aknmnmfPRfvWptdBjOz29Vs46B6aFx/cEBIEAEIamhWc3EcIRKXhQj/hX47nGvt7x8o07ETANP2210OvABwcxH233o1TgAAAABJRU5ErkJggg==" />
                    </td>
                  </tr>
                  <tr>
                    <td>bla</td>
                    <td>bla</td>
                    <td>bla</td>
                    <td>bla</td>
                    <td>bla</td>
                    <td>bla</td>
                    <td>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEUAAADnTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDznTDx+VWpeAAAAJ3RSTlMAAQIFCAkPERQYGi40TVRVVlhZaHR8g4WPl5qdtb7Hys7R19rr7e97kMnEAAAAaklEQVQYV7XOSQKCMBQE0UpQwfkrSJwCKmDf/4YuVOIF7F29VQOA897xs50k1aknmnmfPRfvWptdBjOz29Vs46B6aFx/cEBIEAEIamhWc3EcIRKXhQj/hX47nGvt7x8o07ETANP2210OvABwcxH233o1TgAAAABJRU5ErkJggg==" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
