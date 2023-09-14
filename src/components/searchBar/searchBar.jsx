

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
                      
                    </button>
                  </div>
                </div>
    )
};

export default BarraBusqueda;