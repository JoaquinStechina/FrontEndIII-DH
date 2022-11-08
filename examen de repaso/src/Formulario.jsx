import React, { useState } from "react";
function Formulario (){
    const [palabra,setPalabra] = useState ("")
    function alerta (e){
        e.preventDefault;
        alert ("bienvenido a himalaya")
    }
    return (
        <>
            <h1>{palabra}</h1>
            <form onSubmit={ alerta ( event )} action="">
                <h2></h2>
                <input type="text"
                    placeholder="me interesa su novia"/>

            </form>

            <button type="submit">oprimime</button>
        </>
    )
}
export default Formulario;