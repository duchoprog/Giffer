import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AgregarCat = ({setCategorias, categorias}) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }
const handleSubmit=(e)=>{

    e.preventDefault()
    if(inputValue.trim().length >2 && !categorias.includes(inputValue.trim())){
        setCategorias([inputValue,...categorias])
    }
}

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
             />
            <button type="submit">Agregar</button>
        </form>
    )
}
 
AgregarCat.propTypes={
    setCategorias:PropTypes.func.isRequired
}