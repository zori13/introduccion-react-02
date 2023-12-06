import { useState, useEffect } from "react"
export default function Personajes(){
    const[datos,setDatos]=useState([])
    const[carga,setCarga]=useState(true)
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then((response)=>response.json())
        .then((datos)=>{
            setDatos(datos)
            setCarga(false)
        })
        .catch((error)=>{
            console.error('Error al obtener datos: ',error)
            setCarga(false)
        })
    },[])
return (
    <div>
        <h2>PErsonajes de la API </h2>
        {carga?(
            <p>Cargando</p>
        ):(
            <ol>
                {datos.results.map((item)=>(
                    <li key={item.id}>
                        <img src={item.image} alt={item.name +'-img'}/>
                        <p>{item.name}</p>
                    </li>
                ))}
            </ol>        
        )}
    </div>
)
}