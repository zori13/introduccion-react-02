import { useState } from "react"

export default function ParentComponent(){
    const [mensaje,setMensaje]= useState('Me sale humo de las orejas y me han salido como 20 canas con estos ejercicios')
    const handleButtonClick = () => {
        setMensaje('A ver si hay suerte y esto se actualiza')
    }
    return(
        <div>
        <h2>Componente padre</h2>
        <p>Mensaje: {mensaje} </p>
        <button onClick={handleButtonClick}>Actualizar mensaje</button>
        <ChildComponent mensaje={mensaje} />        
        </div>  
    )  
}
export function ChildComponent(props){
    return(
        <div>
            <h2>Hijo</h2>
            <p>Mensaje del padre: {props.mensaje} </p>
        </div>
    )
}




