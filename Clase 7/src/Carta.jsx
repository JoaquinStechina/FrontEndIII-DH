import React from "react";
import "./Carta.css"

function Carta( {id,descripcion} ){

    return(
        <>
            <p>{id}</p>
            <p>{descripcion}</p>
            <br></br>
        </>
    )
}

export default Carta;