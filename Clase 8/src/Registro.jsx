import React,{useState} from "react";

function Registro(){
    const [campos,setCampos] = useState({
        nombre: "",
        edad: "",
        pokemonFavorito: ""
    })

    const handleChange=(e,nombre)=>{
        setCampos({...campos,[e.target.name]:(e.target.value)})
        console.log(nombre);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return(
        <>
        <h2>Nombre: {campos.nombre}</h2>
        <h2>Edad: {campos.edad}</h2>
        <h2>Pokemon Favorito: {campos.pokemonFavorito}</h2>

        <form>
            <label>
                Nombre
                <input type="text" name="nombre" value={campos.nombre} onChange={e=>handleChange(e,campos.nombre)} />
            </label>
            <label>
                Edad
                <input type="number" name="edad" value={campos.edad} onChange={e=>handleChange(e,campos.edad)}/>
            </label>
            <label>
                Pokemon Favorito
                <input type="text" name="pokemonFavorito" value={campos.pokemonFavorito} onChange={e=>handleChange(e,campos.pokemonFavorito)}/>
            </label>
        </form>
        <button type="submit" onSubmit={handleSubmit}>Agregar cosito</button>
        </>
    )

}

export default Registro;