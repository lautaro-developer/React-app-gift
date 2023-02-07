import { React, useEffect, useState } from "react";
import { Gif } from "./Gif";
import { getGifs } from "../service/getGifs";
import { useGif } from "../hooks/useGif.jsx"


export const ListOfGifs = ({ params }) =>  {
  const { keyword } = params;
  console.log("-")
  
  
  const {loading, gif} = useGif({keyword})


  /*
  const [loading, setLoading] = useState(false)
  const [gif, setGitfs] = useState([]);
  useEffect(() => {
    setLoading(true)
    
    como al cargar la pagina este se renderiza de nuevo, la funcion se renderiza pero se vuelve a ejecutar useEffect, creando un loop infinito 
    
    *setGitfs(diferentGif);*
    // aqui no se crea ese loop de antes, porque useEffect rescibe dor parametros, primero la funcion y despues de array que sera las dependencias
    //setGitfs(diferentGif);

    getGifs({ keyword }).then((gifs) => {
      setGitfs(gifs)
      setLoading(false)
    });
  }, [keyword]);

  */

  if(loading) return <p>Cargando...</p>

  return gif.map(({ url, title, id }) => {
    return (
      <div>
        <Gif 
          key={id} 
          url={url} 
          title={title} 
          id={id} 
        />
      </div>
    )
  });
};


// React.memo() compara props, por ejemplo si las props que le llega en una llamada anterios son las mismo de ahora estas no se renderizan
