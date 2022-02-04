import React, { useState } from 'react'
import { AgregarCat } from './AgregarCat'
import { Grilla} from './Grilla'


export const GifferApp = () => {

    const [categorias, setCategorias] = useState(["sport"])

    return (
        <div>
            <h2>Giffer</h2>
            <AgregarCat setCategorias={setCategorias} categorias={categorias}/>
            <hr/> 
           
           
            <ol>
                {categorias.map(categoria=>{
                    return (
                        <div key= {categoria}>
                            <h2>Cat: {categoria}</h2>
                            < Grilla categoria={categoria} />
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}
