

const BarraBusqueda = () =>{

    return(
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
    )
};

export default BarraBusqueda;