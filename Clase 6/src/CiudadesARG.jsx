import React from 'react'
import "./CiudadesARG.css"

const CiudadesARG = ({ciudades}) => {
  return (
    <>
        {ciudades.map(ciudad => {
            return (
                <div style={{backgroundColor:ciudad.color}}>
                    <p>Id: {ciudad.id} - País: {ciudad.country}</p>
                    <h1>{ciudad.city}</h1>
                    <p>{ciudad.population}</p>
                    <p>{ciudad.color}</p>
                </div>
            )
        } )}
    </>
  )
}

export default CiudadesARG