import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs'
import { GridItem } from './GridItem'

//acces key : vk0kxVD6CuNYAtKjmKkF2QKgHCSUX_5DP_Hnj88746A
export const Grilla = ({categoria}) => {

const {data, loading}= useFetchGifs(categoria)

 /*    const [images, setImages] = useState([])

 */

        return (
        <div>
            {loading&&<h2>Cargando</h2>}
            <div className="grilla">
                {data.map( img=>{
                    
                    return <GridItem key= {img.id} img={img}/>
                })}
            </div> 
        </div>
    )
}
