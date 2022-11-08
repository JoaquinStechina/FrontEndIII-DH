import Carta from "./Carta"
import React, { useState } from "react";

function App() {
  const [lista,setLista] = useState([{
    id:0,
    descripcion: "Objeto inicial"
  }]);

  return (
    <>
      <button onClick={() => setLista(prev=>[...prev,{id:prev.length,descripcion:"Hola"}]) }>Añadir elemento a la lista</button>
      {console.log(lista)}
      <div>
        {lista.map(e=>{
          return <Carta id={e.id} descripcion={e.descripcion}/>
        })}
      </div>
    </>
  )
}

export default App
