import { useState } from 'react'
import Carta from './Carta';
import Jose from './Jose';
import Formulario from './Formulario';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <p>{count}</p>

   <Carta/>
   
    <Jose/>

     
    <Formulario/> 
    </>
  );
}

export default App
