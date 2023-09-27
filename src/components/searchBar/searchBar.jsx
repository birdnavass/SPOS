
import React, { useState, useEffect} from "react";
const BarraBusqueda = () =>{

   // setear los hooks  usestate  
   const[users,Setusers] = useState ([])
   const[ search,setsearch] = useState ("")

   // funcion para obtener datos de una api
   const URL = 'https://jsonplaceholder.typicode.com/users'
   
   const showData = async () =>{
  const  response = await  fetch(URL)
  const   data = await response.json()
   /*console.log(data)*/
   Setusers(data)
   }
    // funcion de busqueda

  useEffect( ()=>{
    showData()
  } , [])

  // funcion buscador
    const searcher = (e) =>{
      setsearch(e.target.value)
      console.log(e.target.value)
    }

    //metodo de filtrado 
    let resultado = []
    if(!search)
    {
        resultado = users
    }else{
         resultado = users.filter( (dato) =>
         dato.name.toLowerCase().includes(search.toLocaleLowerCase())
     )
    }
  
    return (

       <div className="bg-white bg-opacity-300 container h-20  rounded-xl center w-12 flex max-w-[74rem] mx- ">
                  <div className="h-24 -mt-4 text-black-600 center">
                    <input 
                      value={search}
                       onChange={searcher}
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

                 <tbody > 
                      { resultado.map( (user) =>(
                                 <tr key={user.id} >
                                 <td class="px-[5rem] py-4 whitespace-nowrap border-b border-gray-300">
                                   {user.name} 
                                  
                                 </td>
                                 <td class="px-[5rem] py-4 whitespace-nowrap border-b border-gray-300">
                                 {user.username} 
                                 </td>
                                 <td class="px-[10rem] py-4 whitespace-nowrap border-b border-gray-300">
                                 {user.username} 
                                 </td>
                               </tr> 
                               
                               )) }
                     </tbody>
    


                </div>
                      
                




    )
};

export default BarraBusqueda;