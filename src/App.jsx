import "./App.css";
import React, { useState } from "react";
import { ListOfGifs } from "./components/ListOfGifs";
import { Link, Route, useLocation } from "wouter";

import { GifInRoot } from "./home/gifInRoot"

import img from "./assets/react.svg"

function App() {

  // [valorDelEstado, ActualizarEstado]
  // const [count, setCount] = useState(0)

  // useEffect se llama cada ves que se renderiza el componenete
  //UseEffect(() => {}, [])
  
  const gifs = [
    "Argentina",
    "GTA",
    "Juegos",
    "Gatos"
  ]
  const [keyword, setKeyword] = useState("")
  const [path, pathLocation] = useLocation();



  const handleSubmit = (event) => {
    event.preventDefault()
    // navegar a otra ruta
    
    pathLocation(`/gif/${keyword}`)
  }

  const handInput = (event) => {
    console.log(event)
    setKeyword(event.target.value)
  }


  return (
    <div className="App">
      <h2>Gif app</h2>
      <h3>Ultima busqueda</h3>
      
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Buscar Gifs"
          onChange={handInput}
          type="text" 
          name="" 
          value={keyword} />
      </form>

      <Link href="/">
        <img src={img} alt="asd" />
      </Link>
      
      {gifs.map(e => <Link href={`/gif/${e}`}>{`GIf de ${e}`}</Link>)}
      <Route path="/gif/:keyword" component={ListOfGifs} />
    </div>
  );
}

export default App;
